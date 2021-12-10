class Product < ApplicationRecord
  
  validates :name, :product_description, :category_id, :image, :price, presence: true
  # validates :stock, :price, numericality: { greater_than_or_equal_to: 1 } 

  has_many :carts 
  has_many :users, through: :carts

  belongs_to :category
end
