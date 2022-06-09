class Api::AppointmentsController < ApplicationController
    def index
      if params[:book_id]
        book = Book.find(params[:book_id])
        appointments = book.appointments
      else
        appointments = Appointment.all
      end
      render json: appointments, include: :book
      end
    
      def create
        
        book = @current_user.created_books.find_or_create_by!(title: params[:book][:title]) do |book| 
          book.author = params[:book][:author]
          book.image_url = params[:book][:image_url]
          book.summary = params[:book][:summary]
        end
        appointment = @current_user.appointments.create!(book:book, date_of_reading: params[:appointment][:date_of_reading])
        render json: appointment, include: :book, status: :created
      end

      def show
        appointment = Appointment.find_by(id:params[:id])
        if appointment
        render json: appointment
        else
          render json: "No appointment found"
        end
      end

      def update
        appointment = Appointment.find_by(id:params[:id])
        if appointment&.update(appointment_params)
        render json: appointment
        else
          render json: {errors: appointment.errors.full_messages.to_sentence}
        end
      end

      def destroy
        appointment = Appointment.find_by(id: params[:id])
        appointment.destroy
        head :no_content
      end

    
      private
    
      def appointment_params
        params.require(:appointment).permit(:book_id, :date_of_reading)

      end

      def book_params
        params.require(:book).permit(:title, :author, :image_url, :summary)
      end

      
end
