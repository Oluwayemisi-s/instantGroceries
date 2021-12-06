class CartSerializer < ActiveModel::Serializer
  attributes :id, :quantity
  has_one :user
  has_one :product
  
end
