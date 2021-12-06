class CartsController < ApplicationController
    before_action :is_authenticated
    before_action :current_user, only: [:create]
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def create
        user = @current_user
        cart_item = user.carts.create!(cart_params)
        render json: cart_item, status: :created
    end
    
    def index
    end

    def destroy
    end

    def update
    end

    private

    def cart_params
        params.permit(:product_id, :quantity)
    end

end
