class CreateProvidersTable < ActiveRecord::Migration[6.0]
  def change
    create_table :document_types do |t|
      t.string name
      t.timestamps
    end

    create_table :providers do |t|
      t.string :name
      t.references :document_type, foreign_key: true
      t.string :document_number
      t.bigint :district
      t.string :address
      t.string :cel_phone_number
      t.bigint :created_by
      t.bigint :updated_by
      t.timestamps
    end
  end
end
