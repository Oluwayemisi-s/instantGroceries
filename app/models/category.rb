class Category < ApplicationRecord
    has_many :products

    # validate :category_name

    # def category_name
    #     categories = ["vegetables", "dairy", "drinks"] #need to complete this 
    # end

end
