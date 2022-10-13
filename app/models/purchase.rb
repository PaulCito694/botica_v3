class Purchase < ApplicationRecord
  belongs_to :provider
  belongs_to :document_type
  has_many :purchase_details
end
