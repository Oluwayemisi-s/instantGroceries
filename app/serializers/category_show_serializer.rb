class CategoryShowSerializer < ActiveModel::Serializer
  attributes :id, :category_name

  has_many :products
  
end
