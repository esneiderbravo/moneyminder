"""
Campaign schema
"""
import uuid

from pydantic import BaseModel, Field
from pydantic.schema import datetime
from moneyminder.database.models import BaseModel


class UserSchema(BaseModel):
    """
    Base schema for User
    """

    id = Field(example=str(uuid.uuid4()))
    username = Field(example="johndoe@gmail.com")
    email = Field(example="johndoe@gmail.com")
    create_date = Field(example=datetime.utcnow())
    update_date = Field(example=datetime.utcnow())
