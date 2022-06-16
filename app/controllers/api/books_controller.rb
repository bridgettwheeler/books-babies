class Api::BooksController < ApplicationController
    def index
      render json: Book.all 
    end
    
      def create
        book = @current_user.books.create!(book_params)
        render json: book, status: :created
      end

    def order
      render json: Book.order(:title)
    end
    
      private
    
      def book_params
        params.permit(:title, :author, :image_url, :summary)
      end
end
