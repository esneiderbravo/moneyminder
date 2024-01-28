from flask_restful import Resource


class ConnectionAPI(Resource):
    def get(self):
        return {"message": "Service ON!"}, 200
