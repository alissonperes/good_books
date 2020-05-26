class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :author, :slug, :avg_score

  has_many :reviews
end
