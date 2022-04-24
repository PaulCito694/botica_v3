class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :code
      t.string :components
      t.string :location
      t.string :digemid_code
      t.string :description
      t.decimal :wholesale_price, precision: 5, scale: 2
      t.decimal :retail_price, precision: 5, scale: 2
      t.references :laboratory, index: true
      t.references :brand, index: true
      t.references :category, index: true
      t.timestamps
    end
  end
end
