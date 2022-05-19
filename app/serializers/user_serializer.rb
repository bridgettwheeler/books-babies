class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :appointments
  has_many :appointments, serializer: AppointmentSerializer
end
