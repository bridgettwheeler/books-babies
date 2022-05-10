class Book < ApplicationRecord
    has_many :appointments
    has_many :users, through: :appointments

    validates :title, presence: true
end
