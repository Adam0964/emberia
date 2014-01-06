class EmvideosController < ApplicationController
	def index
		render json: emvideo.all
    end

    def show
    	render json: emvideo.find(params[:id])
    end

    def create 
    	sleep 1
    	render json: emvideo.create(emvideo)
    end

    private 
        def emvideo 
        	params[:emvideo].permit(:url)
        end

    def update 
    	render json: emvideo.find(params[:id].tap { |s| s.update_attributes(emvideo)})
    end

    def destory
         Emvideo.find(params[:id]).destroy
         head 204
    end
end
