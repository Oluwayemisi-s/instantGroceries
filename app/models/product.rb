class Product < ApplicationRecord
  has_many :carts 
  has_many :users, through: :carts

  belongs_to :category
end
