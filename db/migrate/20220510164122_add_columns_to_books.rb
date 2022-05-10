class AddColumnsToBooks < ActiveRecord::Migration[6.1]
  def change
    add_column :books, :title, :string
    add_column :books, :author, :string
    add_column :books, :image_url, :string
    add_column :books, :summary, :string
  end
end
