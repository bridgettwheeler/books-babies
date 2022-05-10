class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :book_id, :date_of_reading
  #has_one :user
end
