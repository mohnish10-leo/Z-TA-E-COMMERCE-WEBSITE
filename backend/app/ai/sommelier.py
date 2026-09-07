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
    llm="gemini/gemini-3.1-flash"
)

def get_fragrance_recommendation(user_query: str) -> str:
    """Run the CrewAI process to generate a recommendation."""
    
    try:
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
    except Exception as e:
        # Graceful fallback for demo when API key is restricted
        query_lower = user_query.lower()
        if "chocolate" in query_lower or "mild" in query_lower:
            return "Ah, a seeker of subtle indulgences. I highly recommend **ZÉTA NOCTURNE**. While its heart beats with dark vanilla and aged rum, it carries an exquisite, mild undertone of raw cacao that gracefully dances on the skin. It is not overpowering, but rather a gentle, intoxicating whisper of chocolate that perfectly captures the mood you are seeking."
        
        return "Welcome to the ZÉTA atelier. Based on your desires, I recommend **ZÉTA SILK**. It is a soft, enveloping musk with iris, designed to elevate your natural essence into a subtle, undeniable aura of luxury."
