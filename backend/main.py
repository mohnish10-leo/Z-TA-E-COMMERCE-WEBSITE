import os
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="ZÉTA E-Commerce API",
    description="Python FastAPI backend powering database integration, authentication, and Multi-Agent CrewAI sommelier",
    version="1.0.0"
)

# CORS configuration to connect with our Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

from app.routers import products, chat

app.include_router(products.router)
app.include_router(chat.router)

@app.get("/")
async def root():
    return {
        "status": "online",
        "message": "Welcome to ZÉTA E-Commerce API",
        "features": ["MongoDB integration", "Supabase authentication", "CrewAI Multi-Agent Sommelier"]
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
