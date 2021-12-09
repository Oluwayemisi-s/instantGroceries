class User < ApplicationRecord
    has_secure_password

    has_many :carts 
    has_many :products, through: :carts

    validates :name, :username, :email, :password, :password_confirmation, presence: true
    #validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :username, :email, uniqueness: true
    validates :password, length: { minimum: 6 }
   
end
