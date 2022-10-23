json.array! @sales do |sale|
  json.extract! sale, :id, :series, :correlative, :total_amount, :legend, :document_type_id, :document_number, :sunat_info, :created_at
  json.sale_details_attributes do
    json.array! sale.sale_details do |sale_detail|
      json.extract! sale_detail, :unit_price, :quantity
      json.product_name sale_detail.product.name
      json.laboratory_name sale_detail.laboratory.name
    end
  end
end