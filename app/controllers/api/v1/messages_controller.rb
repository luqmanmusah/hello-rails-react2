module Api
  module V1
    class MessagesController < ApplicationController
      def random_message
        prng = Random.new
        ran_num = prng.rand(Message.count)
        ran_msg = Message.all[ran_num]
        render json: ran_msg
      end
    end
  end
end