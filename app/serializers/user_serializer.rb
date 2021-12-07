class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :isAdmin
  has_many :carts
end
