class CreateTablePriceByPresentations < ActiveRecord::Migration[6.0]
  def change
    create_table :price_by_presentations do |t|
      t.float :amount, default: nil, scale: 2
      t.references :product, foreign_key: true
      t.references :presentation, foreign_key: true
      t.timestamps
    end
  end
end
