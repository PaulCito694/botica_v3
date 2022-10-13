class Laboratory < ApplicationRecord
  has_many :products
  has_many :purchase_details
  has_many :sale_details
end
