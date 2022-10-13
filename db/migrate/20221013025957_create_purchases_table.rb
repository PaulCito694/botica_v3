class CreatePurchasesTable < ActiveRecord::Migration[6.0]
  def change
    create_table :purchases do |t|
      t.date :purchase_date
      t.string :observations
      t.float :total_amount, default: nil, scale: 2
      t.bigint :created_by
      t.bigint :updated_by
      t.references :provider, foreign_key: true
      t.references :document_type, foreign_key: true
      t.string :document_number
      t.timestamps
    end
  end
end
