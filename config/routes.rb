Rails.application.routes.draw do

  root to: redirect(path: '/admin')

  namespace :admin do
    root "home#index"
    get '*path', to: "home#index", constraints: lambda { |req|
      req.path.exclude? 'rails/active_storage'
    }
  end

  get '*path', to: 'home#index', constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }
end
