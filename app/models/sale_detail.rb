class SaleDetail < ApplicationRecord
  belongs_to :sale
  belongs_to :laboratory
  belongs_to :product
end
