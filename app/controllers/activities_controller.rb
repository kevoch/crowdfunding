class ActivitiesController < ApplicationController
  def index
           @activities = PublicActivity::Activity.order("created_at desc").limit(20)
  end
end
    