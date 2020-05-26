class RemoveEditionFromBook < ActiveRecord::Migration[6.0]
  def change
    remove_column :books, :edition, :string
  end
end
