Rails.application.routes.draw do
  root 'components#index'
  
  get '*page', to: 'components#index', constraints: -> (req) do
    !req.xhr? && req.format.html?
  end

  namespace :api do
    namespace :v1 do
      resources :messages, only: %i[index]
      get 'randomMessage', to: 'messages#random_message'
    end
  end
end
