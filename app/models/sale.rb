class Sale < ApplicationRecord
  belongs_to :document_type
  has_many :sales
end
