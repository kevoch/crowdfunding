class Project < ActiveRecord::Base
	mount_uploaders :images, ImagesUploader
end
