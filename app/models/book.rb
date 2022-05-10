class Book < ApplicationRecord
    has_many :appointments
    has_many :users, through: :appointments
    belongs_to :user

    validates :title, presence: true
end
