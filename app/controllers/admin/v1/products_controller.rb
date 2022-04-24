class Admin::V1::ProductsController < ApplicationController
  before_action :set_product, only: [:update, :destroy]

  def index
    @products = Product.all
  end

  def create
    products = Product.new(product_params)
    saved = products.save!
    if saved
      render json: {message: "Se creo correctamente el producto"}, status: :created
    else
      render json: {message: saved}, status: 500
    end
  end

  def update
    @product.assign_attributes(product_params)
    if @product.save!
      render json: {message: "Se creo correctamente el producto"}, status: :created
    end
  end

  def destroy
    if @product.destroy
      render json: {message: "Se elimino correctamente el producto"}, status: :created
    end
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end

  def price_format(number, precision=2)
    number_with_precision(number, precision: precision)
  end

  def product_params
    params.permit(
      :name,
      :code,
      :components,
      :location,
      :description,
      :digemid_code,
      :wholesale_price,
      :retail_price,
      :laboratory_id,
      :brand_id,
      :category_id,
    )
  end
end
