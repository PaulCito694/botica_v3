class AddDiferentColumns < ActiveRecord::Migration[6.0]
  def change
    add_reference :sale_details, :product, foreign_key: true
    rename_column :sale_details, :unit_cost, :unit_price
    remove_column :products, :wholesale_price
    remove_column :products, :retail_price
    add_column :purchase_details, :boxes, :bigint
    add_column :purchase_details, :blister, :bigint
    add_column :purchase_details, :units, :bigint
  end
end
