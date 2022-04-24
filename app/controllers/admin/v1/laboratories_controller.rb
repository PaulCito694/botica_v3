class Admin::V1::LaboratoriesController < ApplicationController
  before_action :set_product, only: [:update, :destroy]

  def index
    brands = Laboratory.all
    render json: brands, status: :ok
  end

  def create
    brand = Laboratory.new
    brand.update(laboratory_params)
    brand.save
  end

  def update
    @brand.assign_attributes(laboratory_params)
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
    @brand = Laboratory.find(params[:id])
  end

  def laboratory_params
    params.permit(
      :name,
      :description
    )
  end
end
