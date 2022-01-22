Rails.application.routes.draw do
  get 'messages/index'
  get 'pages/home'
  get 'pages/hello_react'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :messages, only: %i[index]
      get 'randomMessage', to: 'messages#random_message'
  # Defines the root path route ("/")
  # root "articles#index"
end
