class Admin::V1::CategoriesController < ApplicationController
  before_action :set_product, only: [:update, :destroy]

  def index
    brands = Category.all
    render json: brands, status: :ok
  end

  def create
    brand = Category.new
    brand.update(category_params)
    brand.save
  end

  def update
    @brand.assign_attributes(category_params)
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
    @brand = Category.find(params[:id])
  end

  def category_params
    params.permit(
      :name,
      :description
    )
  end
end
