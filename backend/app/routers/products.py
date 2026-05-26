from fastapi import APIRouter, Depends
from app.db import get_database
from app.models.product import ProductInDB
from typing import List

router = APIRouter(
    prefix="/products",
    tags=["Products"]
)

@router.get("/", response_model=List[ProductInDB])
async def get_products(db = Depends(get_database)):
    """Fetch all products from MongoDB."""
    products_cursor = db.products.find({})
    products = []
    async for prod in products_cursor:
        # Convert ObjectId to string
        prod["_id"] = str(prod["_id"])
        products.append(ProductInDB(**prod))
    return products

@router.get("/{slug}", response_model=ProductInDB)
async def get_product_by_slug(slug: str, db = Depends(get_database)):
    """Fetch a single product by slug."""
    product = await db.products.find_one({"slug": slug})
    if product:
         product["_id"] = str(product["_id"])
         return ProductInDB(**product)
    return {"error": "Product not found"}
