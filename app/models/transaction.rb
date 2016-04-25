class Transaction < ActiveRecord::Base
	belongs_to :user
	belongs_to :project
	validates :amount, :numericality => { :greater_than_or_equal_to => 1 }

end
