Rails.application.routes.draw do
  namespace :api do
    resources :appointments
    resources :books, only: [:index, :show] do
      # nested resource for appointments
      resources :appointments, only: [:show, :create]
    end
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    delete "/users/:id", to: "users#destroy"
    post "/create-book-appointment", to: "appointments#create"
    get "/order-books", to: "books#order"
    end
  # all other routes will be load our React application
  # this route definition matches:
  # - *path: all paths not matched by one of the routes defined above
  # - constraints:
  #   - !req.xhr?: it's not a XHR (fetch) request
  #   - req.format.html?: it's a request for a HTML document
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
