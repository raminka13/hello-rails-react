class CreateGreetings < ActiveRecord::Migration[7.0]
  def change
    create_table :greetings do |t|
      t.string :author
      t.string :quote

      t.timestamps
    end
  end
end
