class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.belongs_to :category, null: false, foreign_key: true
      t.string :product_description
      t.string :image
      t.integer :price
      t.integer :stock

      t.timestamps
    end
  end
end
