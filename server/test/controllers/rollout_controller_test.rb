require "test_helper"

class RolloutControllerTest < ActionDispatch::IntegrationTest
  test "should get get_token" do
    get rollout_get_token_url
    assert_response :success
  end
end
