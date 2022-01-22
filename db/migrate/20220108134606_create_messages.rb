class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages, if_not_exists: true do |t|
      t.string :text
      t.string :body

      t.timestamps
    end
  end
end
