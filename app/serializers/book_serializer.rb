class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :author, :slug

  has_many :reviews
end
