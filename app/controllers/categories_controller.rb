class CategoriesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
#    before_action :is_authenticated
   
    def index
        categories = Category.all 
        render json: categories
    end

    def show
        category = Category.find(params[:id])
        # render json: category, status: :ok, serializer: CategoryShowSerializer
        render json: category.products, status: :ok
    end

    def create
    end

    private

   

end
