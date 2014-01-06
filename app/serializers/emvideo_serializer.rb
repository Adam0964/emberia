class EmvideoSerializer < ActiveModel::Serializer
  attributes :id, :url, :description, :uploader, :airDate
end
