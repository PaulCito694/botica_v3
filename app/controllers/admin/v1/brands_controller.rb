class Admin::V1::BrandsController < ApplicationController
  def index
    brands = Brand.all
    render json: brands, status: :ok
  end

  def create
    brand = Brand.new
    brand.update(brand_params)
    brand.save
  end

  def brand_params
    params.permit(
    :name,
    :description
    )
  end
end
