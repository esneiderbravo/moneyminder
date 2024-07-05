from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)
app.config[
    "SQLALCHEMY_DATABASE_URI"
] = "postgresql://postgres:postgres@localhost:5432/moneyminder"
db = SQLAlchemy(app)
migrate = Migrate(app, db)

TOKEN_SECRET_KEY = "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"
