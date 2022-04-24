json.data do
  json.array! @products do |product|
    json.extract! product, :id, :name, :code, :location, :components, :laboratory_id, :brand_id, :category_id
    json.wholesale_price number_with_precision(product.wholesale_price, precision: 2)
    json.retail_price number_with_precision(product.retail_price, precision: 2)
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
end