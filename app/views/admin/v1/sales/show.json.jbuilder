json.extract! @sale, :id, :series, :correlative, :total_amount, :legend, :document_type_id, :document_number, :sunat_info, :created_at
json.sale_details_attributes do
  json.array! @sale.sale_details do |sale_detail|
    json.extract! sale_detail, :id, :unit_price, :quantity, :product_id
    json.product_name sale_detail.product.name
    json.laboratory_name sale_detail.laboratory.name
    json.laboratory_id sale_detail.laboratory_id
    json.suggested_price 50
    json.final_price 50
    json.presentation 'ampollas'
    json.expiration_date '2022-10-30'
    json.quantity sale_detail.quantity
  end
end
