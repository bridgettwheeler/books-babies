class User < ApplicationRecord
  has_many :appointments, dependent: :destroy
  has_many :books, through: :appointments
  has_many :created_books, class_name: "Book", dependent: :destroy
  
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
end
