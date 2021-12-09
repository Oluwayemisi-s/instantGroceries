class Cart < ApplicationRecord
  belongs_to :user
  belongs_to :product

  validates :quantity, presence: true
  validates :quantity, numericality: { greater_than_or_equal_to: 1 }
  # validates :name, presence: true, uniqueness: { scope: :product }

  
end
