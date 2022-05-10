class AppointmentsController < ApplicationController
    def index
        render json: Appointment.all
      end
    
      def create
        appointment = @current_user.appointments.create!(appointment_params)
        render json: appointment, status: :created
      end
    
      private
    
      def appointment_params
        params.permit(:user_id, :book_id, :date_of_reading)
      end
end
