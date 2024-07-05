from datetime import datetime, timedelta

from moneyminder.app import db
from moneyminder.database.models import User
from moneyminder.database.schemas.user import UserSchema


class UserManager(object):
    """
    Contain methods to access to data related to User Model
    """

    @staticmethod
    def get(filter_values, all_users=False):
        """
        Select User records
        :param filter_values: Dict, values to filter the User. Ie, {'id': 32166}
        :param all_users: Boolean, get all user from an email. Ie, {... like "lgonzalez%@lendingfront.com"}
        :return SQLAlchemy object: Array, list of results found
        """

        try:
            if all_users:
                email = filter_values["email"].split("@")
                email_filter = "{0}%@{1}".format(email[0], email[1])

                return (
                    db.session.query(User)
                    .filter(
                        User.email.ilike(email_filter),
                    )
                    .all()
                )
            else:
                return db.session.query(User).filter_by(**filter_values).first()

        except Exception as e:
            db.session.rollback()
            return None

    @staticmethod
    def create(
        username,
        email,
        password,
    ):
        """
        Creates a new instance of User
        :return
        """
        return User(
            username=username,
            email=email,
            password=password,
        )

    @staticmethod
    def serialize_user(
        user,
    ):
        """
        serialize user item or items
        :param user: db object of User model.
        :return response: Dict, user data. { id: 1, first_name: 'First Name', last_name: 'Last name', ... }
        """
        user_schema = UserSchema()
        return user_schema.dump(user).data
