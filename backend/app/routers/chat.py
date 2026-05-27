from fastapi import APIRouter
from pydantic import BaseModel
from app.ai.sommelier import get_fragrance_recommendation

router = APIRouter(
    prefix="/chat",
    tags=["AI Concierge"]
)

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    reply: str

@router.post("/", response_model=ChatResponse)
def chat_with_sommelier(request: ChatRequest):
    """Interact with the CrewAI Master Perfumer."""
    try:
        reply = get_fragrance_recommendation(request.message)
        return {"reply": str(reply)}
    except Exception as e:
        return {"reply": f"Our sommelier is currently assisting another client. Please try again later. (Error: {str(e)})"}
