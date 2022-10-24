class Product < ApplicationRecord
  include Hashid::Rails

  after_create :update_code
  belongs_to :brand
  belongs_to :category
  belongs_to :laboratory
  has_many :purchase_details
  has_many :price_by_presentations
  has_many :sale_details

  private

  def update_code
    update(code: "Prod#{id}-#{hashid}")
  end
end
