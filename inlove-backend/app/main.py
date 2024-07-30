# app/main.py

from fastapi import FastAPI
from app.database import connect_to_mongo, close_mongo_connection
from contextlib import asynccontextmanager


@asynccontextmanager
async def lifespan(app: FastAPI):
    await connect_to_mongo()
    yield
    await close_mongo_connection()

app = FastAPI(lifespan=lifespan)

