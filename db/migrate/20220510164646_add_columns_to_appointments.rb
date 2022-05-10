class AddColumnsToAppointments < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :user_id, :string
    add_column :appointments, :book_id, :string
    add_column :appointments, :date_of_reading, :datetime
  end
end
