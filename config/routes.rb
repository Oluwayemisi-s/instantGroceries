Rails.application.routes.draw do
  
  resources :carts, only: [:create, :show, :destroy]
  resources :users, only: [:create, :show]
  resources :products
  resources :categories, only: [:index, :show]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
  get '/cartitems', to: 'carts#show'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
