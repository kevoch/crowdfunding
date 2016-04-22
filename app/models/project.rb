class Project < ActiveRecord::Base

	belongs_to :user

	mount_uploaders :images, ImagesUploader
end
