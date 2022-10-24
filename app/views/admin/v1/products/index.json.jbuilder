json.array! @products do |product|
  json.extract! product, :id, :name, :code, :location, :components, :laboratory_id, :brand_id, :category_id
  json.laboratory do
    json.name product.laboratory.name
  end
  json.category do
    json.name product.category.name
  end
  json.brand do
    json.name product.brand.name
  end
end