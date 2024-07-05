import jwt

from moneyminder.app import TOKEN_SECRET_KEY


class JWTHelper(object):
    @classmethod
    def encode_user(cls, user):
        """
        encode user payload as a jwt
        :param user:
        :return: encoded user payload
        """
        encoded_data = jwt.encode(payload=user, key=TOKEN_SECRET_KEY)

        return encoded_data

    @classmethod
    def decode_user(cls, token):
        """
        :param token: jwt token
        :return:
        """
        try:
            # Decode the JWT token
            decoded_data = jwt.decode(token, key=TOKEN_SECRET_KEY, algorithms=["HS256"])
            return decoded_data
        except jwt.ExpiredSignatureError:
            print("Token has expired")
        except jwt.InvalidTokenError:
            print("Invalid token")
        except Exception as e:
            print(f"An unexpected error occurred: {e}")

