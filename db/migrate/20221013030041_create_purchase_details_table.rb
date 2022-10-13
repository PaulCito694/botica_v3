class CreatePurchaseDetailsTable < ActiveRecord::Migration[6.0]
  def change
    create_table :purchase_details do |t|
      t.string :lot
      t.date :expiration_date
      t.float :unit_cost, default: nil, scale: 2
      t.float :quantity, default: nil, scale: 2
      t.references :purchase, foreign_key: true
      t.references :product, foreign_key: true
      t.references :laboratory, foreign_key: true
      t.bigint :created_by
      t.bigint :updated_by
      t.timestamps
    end
  end
end
