class Product < ApplicationRecord
  include Hashid::Rails

  after_create :update_code
  belongs_to :brand
  belongs_to :category
  belongs_to :laboratory

  private

  def update_code
    update(code: "Prod#{id}-#{hashid}")
  end
end
