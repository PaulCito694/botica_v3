class Admin::V1::SalesController < ApplicationController
  before_action :set_sale, only: [:update, :destroy, :show]

  def index
    @sales = Sale.all
  end

  def create
    sale = Sale.create(sale_params)
    render json: {}, status: :ok if sale.save!
  end

  def show; end

  def update
    @sale.assign_attributes(sale_params)
    if @sale.save!
      render json: {message: "Se modifico correctamente la venta"}, status: :ok
    end
  end

  def destroy
    if @sale.destroy
      render json: {message: "Se elimino correctamente la venta"}, status: :ok
    end
  end

  private

  def set_sale
    @sale = Sale.find(params[:id])
  end

  def sale_params
    params.permit(
      :total_amount, :legend, :document_type_id, :document_number, :series, :correlative,
      sale_details_attributes: [
        :id, :laboratory_id, :unit_price, :quantity, :product_id
      ])
  end
end
