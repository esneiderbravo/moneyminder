from flask_restful import Api

from moneyminder.app import app
from moneyminder.app.api.resources.auth import AuthAPI
from moneyminder.app.api.resources.connection import ConnectionAPI

api = Api(app)
api.add_resource(ConnectionAPI, "/connection/check")
api.add_resource(AuthAPI, "/auth")
