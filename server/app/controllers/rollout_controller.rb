class RolloutController < ApplicationController
  
  TOKEN_TTL_SECS = 600000

  ROLLOUT_CLIENT_ID = 'YOUR_CLIENT_ID_HERE'
  ROLLOUT_CLIENT_SECRET ='YOUR_CLIENT_SECRET_HERE'


  def get_token
    print "hello"
    now_sec = Time.now.to_i

    payload = {
      iss: ROLLOUT_CLIENT_ID,
      sub: 'rollout',
      iat: now_sec,
      exp: now_sec + TOKEN_TTL_SECS
    }

    token = JWT.encode payload, ROLLOUT_CLIENT_SECRET, 'HS512'
    render json: {"token": token}
  end
end
