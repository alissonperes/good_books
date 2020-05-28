class AddYearToBook < ActiveRecord::Migration[6.0]
  def change
    add_column :books, :year, :integer
  end
end
