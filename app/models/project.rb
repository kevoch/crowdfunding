class Project < ActiveRecord::Base
	belongs_to :user
	has_many :transactions
	# has_many :users, through: :transactions
	mount_uploaders :images, ImagesUploader
	mount_uploader :video, VideoUploader
	acts_as_votable
end
