class CreateSalesTable < ActiveRecord::Migration[6.0]
  def change
    create_table :sales do |t|
      t.string :series
      t.string :correlative
      t.float :total_amount, default: nil, scale: 2
      t.string :legend
      t.references :document_type, foreign_key: true
      t.string :document_number
      t.jsonb :sunat_info
      t.bigint :created_by
      t.bigint :updated_by
      t.timestamps
    end
  end
end
