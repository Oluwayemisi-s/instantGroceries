class User < ApplicationRecord
    has_secure_password

    has_many :carts 
    has_many :products, through: :carts

    # validates :name, :username, :email, :password, :password_confirmation, presence: true
    # # validates :email, format: { with: /\A[a-zA-Z]+\z/, message: "Enter a valid email" }
    # validates :email, uniqueness: true
    # validates :password, length: { minimum: 6 }
    # validates :password, confirmation: true
end
