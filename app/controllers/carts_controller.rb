class CartsController < ApplicationController
    # before_action :is_authenticated
    # before_action :current_user, only: [:create]
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def create
        # user = @current_user
        cart_item = Cart.create!(cart_params)
        render json: cart_item, status: :created
    end
    
    def show
        user = User.find_by_id(session[:user_id])
        cart_items = user.carts
        render json: cart_items, status: :ok
    end

    def destroy
        cart = Cart.find(params[:id])
        cart.destroy
        render json:{}
    end

    def update
    end

    private

    def cart_params
        params.permit(:user_id, :product_id, :quantity)
    end

end
