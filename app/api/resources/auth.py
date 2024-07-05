from flask_restful import Resource, reqparse

from moneyminder.app.utils.jwt_helper import JWTHelper


class AuthAPI(Resource):
    """
    Auth API
    """

    @classmethod
    def post(cls):
        """
        Make authentication request
        :return: Authentication response
        """
        params = cls.__get_post_params()
        token = params.get("token")
        userData = JWTHelper.decode_user(token)
        return {"userData": userData}, 200

    @classmethod
    def __get_post_params(cls):
        """
        Returns post params
        :return: request params
        """
        parser = reqparse.RequestParser()
        parser.add_argument("token", type=str, required=True)
        params = dict(parser.parse_args())
        return params
