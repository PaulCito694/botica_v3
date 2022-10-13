class CreatePresentationsTable < ActiveRecord::Migration[6.0]
  def change
    create_table :presentations do |t|
      t.string :name
      t.string :abbreviation
      t.string :description
      t.bigint :created_by
      t.bigint :updated_by
      t.timestamps
    end
  end
end
