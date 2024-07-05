"""
DB Models
"""
import uuid
from datetime import datetime
from sqlalchemy import String, DateTime
from sqlalchemy.sql.schema import Column
from werkzeug.security import generate_password_hash, check_password_hash
from moneyminder.database import Base


class BaseModel(Base):
    """
    Base Class for shared columns.
    """

    __abstract__ = True

    create_date = Column(DateTime, default=datetime.utcnow)
    update_date = Column(DateTime, default=datetime.utcnow)


class User(Base):
    """
    User Model
    """

    __tablename__ = "user"

    id = Column(String, primary_key=True, default=uuid.uuid4())
    username = Column(String, unique=True, nullable=False)
    email = Column(String, unique=True, nullable=False)
    password_hash = Column(String, unique=True, nullable=False)

    @property
    def password(self):
        raise AttributeError("password is not a readable attribute")

    @password.setter
    def password(self, password):
        self.password_hash = generate_password_hash(
            password, method="pbkdf2:sha256:20000", salt_length=8
        )

    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)
