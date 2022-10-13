class Provider < ApplicationRecord
  belongs_to :document_type
  has_many :purchases
end
