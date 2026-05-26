from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime

class ScentNote(BaseModel):
    type: str
    name: str

class Variant(BaseModel):
    size: str
    price: float

class ProductBase(BaseModel):
    slug: str
    name: str
    tagline: str
    description: str
    price: float
    image: str
    variants: List[Variant] = []
    notes: List[ScentNote] = []

class ProductCreate(ProductBase):
    pass

class ProductInDB(ProductBase):
    id: str = Field(alias="_id")
    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        populate_by_name = True
