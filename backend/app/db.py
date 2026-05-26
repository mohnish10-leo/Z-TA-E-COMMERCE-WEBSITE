import os
from motor.motor_asyncio import AsyncIOMotorClient
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()

# MongoDB Setup
MONGODB_URI = os.getenv("MONGODB_URI", "mongodb://localhost:27017")
DB_NAME = "zeta_luxury"

client = AsyncIOMotorClient(MONGODB_URI)
db = client[DB_NAME]

# Supabase Setup
SUPABASE_URL = os.getenv("SUPABASE_URL", "")
SUPABASE_KEY = os.getenv("SUPABASE_ANON_KEY", "")

supabase: Client | None = None
if SUPABASE_URL and SUPABASE_KEY:
    supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

async def get_database():
    return db
