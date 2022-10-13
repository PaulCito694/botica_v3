class DocumentType < ApplicationRecord
  has_many :providers
  has_many :purchases
  has_many :sales
end
