class Admin::V1::DocumentTypesController < ApplicationController
  def index
    render json: DocumentType.all.select(:id, DocumentType.arel_table['CreateProvidersTable'].as('name')), status: :ok
  end
end
