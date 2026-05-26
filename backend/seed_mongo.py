import asyncio
import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()
MONGODB_URI = os.getenv("MONGODB_URI", "mongodb://localhost:27017")
client = AsyncIOMotorClient(MONGODB_URI)
db = client["zeta_luxury"]

products = [
    {
        "slug": "mood",
        "name": "MOOD",
        "tagline": "Atmospheric Smoke",
        "description": "An exploration of silence and shadow. A complex scent that evolves from a sharp, metallic top note into a deep, comforting embrace of smoke and dark woods. Perfect for evening wear and moments of quiet reflection.",
        "price": 240,
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDVASdj8Wyx-YiedTP4Fjbr5q8QFGZRzzdMiUTAur82tU81quMVXJJ56Ee6t--VItiarEGuzwTQ-MpFU_84kfxuUz26UDOOOL5d7OW5H677TamDOfbgCyuMQq5MVrUEPi6Uxg_b31nwdA_Ln76o5Ce3zEQlB7P1fWU9SgIPmUa_IDO6kN81QvYct3NWBUVOCT7MwdcBGhvPK5mQ2aNep5kZz8tJZur_le0Xe6H4v9Sy429WpJqO8wg-vpcWRxe1jrEaOqhpf3pSo_M",
        "variants": [{"size": "50ml", "price": 240}, {"size": "100ml", "price": 340}],
        "notes": [
            {"type": "Top", "name": "Metallic Aldehydes"},
            {"type": "Heart", "name": "Burnt Cedarwood"},
            {"type": "Base", "name": "Smoked Vanilla"}
        ]
    },
    {
        "slug": "dragon",
        "name": "DRAGON",
        "tagline": "Incandescent Amber",
        "description": "A fiery, warm composition that commands attention. The heat of spices meets the golden glow of ancient resins, creating an aura of untouchable confidence and warmth.",
        "price": 215,
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzZH7YUQjGNzLUdx8dWUfqs8jYcD8KTw3tXHo0Lx86nPQHdQutGtR85jsFc77NsN-UiEjcVQMfoRJR0IBMYdx3Aj8uhbL7EAN9Hcr_WidBiia7jSkVlPVj2gzkbidME0mwOMU8kL-EoPZAXLaCaU5mI_A0MgTzz7ZXoKjpCSzEJyEZscN30m7RcnimHgV10CErwNiwv5B_U6CZooYaRK_QofM9FwLtZIFdRrH5rtY2KjaxTs8rmBNShp6H7ecKmlHBNNYzWKmp3vk",
        "variants": [{"size": "50ml", "price": 215}, {"size": "100ml", "price": 310}],
        "notes": [
            {"type": "Top", "name": "Pink Peppercorn"},
            {"type": "Heart", "name": "Golden Amber"},
            {"type": "Base", "name": "Olibanum Resin"}
        ]
    },
    {
        "slug": "petals",
        "name": "PETALS",
        "tagline": "Velvet Floral",
        "description": "A modern deconstruction of the traditional rose. Stripped of its powdery sweetness, this is a dark, thorny floral. It smells like crushed petals on a damp stone floor.",
        "price": 260,
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDB8Z6XymZMxY0v_fWxk8KimL5beRRzqj_8_RUBAYipY8eU66iF1LMiwK9YJ6MkmjN6sAVwfJfS9O3Xhls2JMCpRHziRgZdp1PwC6jOm7DS9rnIJhbnRPSdEyhMTkTXOJ7hO1YF4ZwVD6WInKzMM0GM6vnHsTQwX25vcdze1FyHzF3uYzfSq8DUyNQC9prA-JeiTLiIvgXiIgk5_I4s1z2tmOIM7IND9tAsBsLphPPT7w6czCNI2V5nIQdXhRhSNWT6uXq6E98iirI",
        "variants": [{"size": "50ml", "price": 260}, {"size": "100ml", "price": 380}],
        "notes": [
            {"type": "Top", "name": "Rainwater"},
            {"type": "Heart", "name": "Damask Rose Absolute"},
            {"type": "Base", "name": "Patchouli"}
        ]
    },
    {
        "slug": "abyss",
        "name": "ABYSS",
        "tagline": "Deep Oceanic Oud",
        "description": "The cold, unforgiving depths of the ocean captured in a bottle. Salty sea spray crashes against dark, ancient oud wood. A fragrance of profound mystery and depth.",
        "price": 280,
        "image": "/images/abyss.png",
        "variants": [{"size": "50ml", "price": 280}, {"size": "100ml", "price": 410}],
        "notes": [
            {"type": "Top", "name": "Sea Salt"},
            {"type": "Heart", "name": "Black Agarwood"},
            {"type": "Base", "name": "Ambergris"}
        ]
    },
    {
        "slug": "eclipse",
        "name": "ECLIPSE",
        "tagline": "Midnight Bergamot & Leather",
        "description": "A fragrance of contrasts. The sharp, bright citrus of Italian bergamot is quickly swallowed by the smooth, dark richness of worn leather. An olfactive representation of a solar eclipse.",
        "price": 225,
        "image": "/images/eclipse.png",
        "variants": [{"size": "50ml", "price": 225}, {"size": "100ml", "price": 330}],
        "notes": [
            {"type": "Top", "name": "Italian Bergamot"},
            {"type": "Heart", "name": "Black Leather"},
            {"type": "Base", "name": "Vetiver"}
        ]
    },
    {
        "slug": "lumina",
        "name": "LUMINA",
        "tagline": "White Tea & Cashmere Wood",
        "description": "A soft, radiant aura. Minimalist and clean, it evokes the feeling of warm morning light on crisp white linens. Comforting, subtle, and endlessly sophisticated.",
        "price": 195,
        "image": "/images/lumina.png",
        "variants": [{"size": "50ml", "price": 195}, {"size": "100ml", "price": 280}],
        "notes": [
            {"type": "Top", "name": "White Tea Leaf"},
            {"type": "Heart", "name": "Cashmeran"},
            {"type": "Base", "name": "White Musk"}
        ]
    },
    {
        "slug": "nocturne",
        "name": "NOCTURNE",
        "tagline": "Dark Vanilla & Spiced Rum",
        "description": "An intoxicating, nocturnal blend. The sweetness of vanilla is subverted by dark rum and bitter spices. A scent meant for the shadows of a speakeasy.",
        "price": 250,
        "image": "/images/nocturne.png",
        "variants": [{"size": "50ml", "price": 250}, {"size": "100ml", "price": 360}],
        "notes": [
            {"type": "Top", "name": "Aged Rum"},
            {"type": "Heart", "name": "Clove & Nutmeg"},
            {"type": "Base", "name": "Madagascar Vanilla"}
        ]
    },
    {
        "slug": "vertex",
        "name": "VERTEX",
        "tagline": "Crisp Alpine Air & Cedar",
        "description": "The sharp, thin air at the peak of a mountain. Cold, invigorating, and piercingly clean, grounded by the steady, dry scent of alpine cedar.",
        "price": 210,
        "image": "/images/vertex.png",
        "variants": [{"size": "50ml", "price": 210}, {"size": "100ml", "price": 300}],
        "notes": [
            {"type": "Top", "name": "Ozone"},
            {"type": "Heart", "name": "Juniper Berry"},
            {"type": "Base", "name": "Atlas Cedar"}
        ]
    },
    {
        "slug": "silk",
        "name": "SILK",
        "tagline": "Soft Musk & Iris",
        "description": "A second skin. Powdery iris and skin-like musks create a fragrance that is almost imperceptible, yet deeply alluring. The olfactive equivalent of a whisper.",
        "price": 235,
        "image": "/images/silk.png",
        "variants": [{"size": "50ml", "price": 235}, {"size": "100ml", "price": 345}],
        "notes": [
            {"type": "Top", "name": "Ambrette Seed"},
            {"type": "Heart", "name": "Tuscan Iris"},
            {"type": "Base", "name": "Skin Musk"}
        ]
    }
]

async def seed_db():
    print("Clearing existing products...")
    await db.products.delete_many({})
    
    print("Inserting products into MongoDB...")
    await db.products.insert_many(products)
    
    print("Seeding complete!")

if __name__ == "__main__":
    asyncio.run(seed_db())
