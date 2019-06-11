require 'test_helper'

class Api::ItemssControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_itemss_index_url
    assert_response :success
  end

  test "should get show" do
    get api_itemss_show_url
    assert_response :success
  end

  test "should get create" do
    get api_itemss_create_url
    assert_response :success
  end

  test "should get update" do
    get api_itemss_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_itemss_destroy_url
    assert_response :success
  end

end
