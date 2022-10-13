class PurchaseDetail < ApplicationRecord
  belongs_to :purchase
  belongs_to :product
  belongs_to :laboratory
end
