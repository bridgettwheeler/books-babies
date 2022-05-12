class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :book_id, :date_of_reading, :user, :book
  has_one :user
end
