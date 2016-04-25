class User < ActiveRecord::Base
	has_many :projects
  has_many :transactions
  acts_as_voter
  include PublicActivity::Model
  tracked
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,

         :recoverable, :rememberable, :trackable, :omniauthable, :omniauth_providers => [:facebook]


  mount_uploader :avatar, AvatarUploader

 def self.from_omniauth(auth)

      where(provider: auth.provider, uid: auth.uid).first_or_create do |user|

        user.provider = auth.provider
        user.uid = auth.uid
        user.email = auth.info.email
        user.password = Devise.friendly_token[0,20]
        user.first_name = auth.info.name
        user.remote_avatar_url = auth.info.image.gsub('http://','https://')

      end

  end



end

