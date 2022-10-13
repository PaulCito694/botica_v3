class CreateSaleDetailsTable < ActiveRecord::Migration[6.0]
  def change
    create_table :sale_details do |t|
      t.references :sale, foreign_key: true
      t.references :laboratory, foreign_key: true
      t.float :unit_cost, default: nil, scale: 2
      t.float :quantity, default: nil, scale: 2
      t.bigint :created_by
      t.bigint :updated_by
      t.timestamps
    end
  end
end
