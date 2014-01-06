class CreateEmvideos < ActiveRecord::Migration
  def change
    create_table :emvideos do |t|
      t.string :url
      t.text :description
      t.string :uploader
      t.date :airDate

      t.timestamps
    end
  end
end
