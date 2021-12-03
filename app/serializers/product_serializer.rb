class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :product_description, :image, :price, :stock
  has_one :category
end
