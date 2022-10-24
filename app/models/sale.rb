class Sale < ApplicationRecord
  belongs_to :document_type
  has_many :sale_details
  accepts_nested_attributes_for :sale_details
end
