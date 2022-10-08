require 'capistrano/bundler'
require 'capistrano/passenger'
require 'capistrano/rails/assets'
require 'capistrano/rails/migrations'
require 'capistrano/rbenv'

set :rbenv_type, :user
set :rbenv_ruby, '2.7.1'