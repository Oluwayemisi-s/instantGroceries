class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    #before_action :is_authorised, only: [:update, :destroy]


    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = current_user
        if user
            render json: user, status: :ok
        else
            render json: {errors: ["Login to continue"]}, status: :unauthorized
        end
    end

    private
    def user_params
        params.permit(:name, :username, :email, :password, :password_confirmation)
    end

end
