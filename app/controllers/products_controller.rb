class ProductsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
    # before_action :is_authenticated
    # before_action :is_authorised, only: [:create, :update, :destory]

    def index
        products = Product.all 
        render json: products
    end

    def show
        # products = Product.find(params[:id])
        # render json: products, status: :ok, serializer: CategoryShowSerializer
    end

    def update
    end

    def create
        byebug
        product = Product.create!(product_params)
        render json: product, status: :created    
    end

    def destroy
    end

    private
    def product_params
        params.permit(:name, :product_description, :category_id, :image, :price, :stock)
    end

end
