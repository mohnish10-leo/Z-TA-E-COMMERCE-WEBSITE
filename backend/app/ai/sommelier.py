import os
from crewai import Agent, Task, Crew, Process
from dotenv import load_dotenv

load_dotenv()

# CrewAI uses LiteLLM under the hood, which looks for GEMINI_API_KEY.
if "GOOGLE_API_KEY" in os.environ and "GEMINI_API_KEY" not in os.environ:
    os.environ["GEMINI_API_KEY"] = os.environ["GOOGLE_API_KEY"]

# Define the Sommelier Agent
sommelier_agent = Agent(
    role="Master Perfume Sommelier",
    goal="Recommend the perfect ZÉTA luxury fragrance based on the customer's mood, preferences, and desired aesthetic.",
    backstory=(
        "You are an elite master perfumer working for ZÉTA, a highly exclusive luxury fragrance house. "
        "You understand the deep emotional connection of scents. You speak elegantly, poetically, and "
        "with immense sophistication. You have deep knowledge of the ZÉTA catalog: ZÉTA DRAGON (spicy amber), "
        "ZÉTA PETALS (dark rose), ZÉTA MOOD (smoky woods), ABYSS (oceanic oud), ECLIPSE (bergamot leather), "
        "LUMINA (white tea cashmere), NOCTURNE (dark vanilla rum), VERTEX (alpine cedar), and SILK (soft musk iris)."
    ),
    verbose=True,
    allow_delegation=False,
    llm="gemini/gemini-pro"
)

def get_fragrance_recommendation(user_query: str) -> str:
    """Run the CrewAI process to generate a recommendation."""
    
    recommendation_task = Task(
        description=(
            f"A high-end client has entered the ZÉTA boutique and asks: '{user_query}'. "
            "Analyze their request, identify the underlying mood or aesthetic they desire, "
            "and recommend exactly ONE or TWO ZÉTA fragrances that perfectly match their request. "
            "Explain your choice using poetic, evocative language describing the scent notes."
        ),
        expected_output="A beautifully written paragraph recommending a ZÉTA fragrance, sounding like a high-end concierge.",
        agent=sommelier_agent
    )

    crew = Crew(
        agents=[sommelier_agent],
        tasks=[recommendation_task],
        process=Process.sequential
    )

    result = crew.kickoff()
    return result
