class ApplicationController < ActionController::API
  include ActionController::Cookies

  private

  def current_user
    @current_user = User.find_by(id: session[:user_id])
  end

  def is_authorised
    render json: {errors: ["You are not authorized to perform this action"]}, status: :forbidden unless current_user.isAdmin
  end

  def is_authenticated
    render json: {errors: ["You are not authorized to perform this action"]}, status: :forbidden unless current_user
  end

  def render_not_found
    render json: { errors: ["Item not found"] }, status: :not_found
  end

  def record_invalid (invalid)
    render json: { errors: [invalid.record.errors.full_messages]}, status: :unprocessable_entity
  end

end
