class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :author, :year, :slug, :avg_score

  has_many :reviews
end
