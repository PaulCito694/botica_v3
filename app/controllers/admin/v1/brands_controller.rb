class Admin::V1::BrandsController < ApplicationController
  before_action :set_product, only: [:update, :destroy]

  def index
    brands = Brand.all
    render json: brands, status: :ok
  end

  def create
    brand = Brand.new
    brand.update(brand_params)
    brand.save
  end

  def update
    @brand.assign_attributes(brand_params)
    if @brand.save
      render json: {message: "Se creo correctamente la marca"}, status: :created
    end
  end

  def destroy
    if @brand.destroy
      render json: {message: "Se elimino correctamente la marca"}, status: :created
    end
  end

  private

  def set_brand
    @brand = Brand.find(params[:id])
  end

  def brand_params
    params.permit(
    :name,
    :description
    )
  end
end
