class Admin::V1::SalesController < ApplicationController
  before_action :set_product, only: [:update, :destroy]

  def index
    @sales = Sale.all
  end

  def create
    sale = Sale.create(sale_params)
    debugger
    render json: {}, status: :ok if sale.save!
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

  def sale_params
    params.permit(
      :total_amount, :legend, :document_type_id, :document_number, :series, :correlative,
      sale_details_attributes: [
        :laboratory_id, :unit_price, :quantity, :product_id
      ])
  end
end
