class PriceByPresentation < ApplicationRecord
  belongs_to :product
  belongs_to :presentation
end
