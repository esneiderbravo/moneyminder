"""Feature - Create User table

Revision ID: d87660a55290
Revises: 
Create Date: 2024-01-28 11:00:58.312753

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "d87660a55290"
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    """
    Create User table
    :return:
    """

    op.create_table(
        "user",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("username", sa.String(length=255), nullable=False),
        sa.Column("email", sa.String(length=255), nullable=False),
        sa.Column("password", sa.String(length=255), nullable=False),
    )


def downgrade():
    """
    Rollback all changes
    """
    op.drop_table("user")
