class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :book_id

  belongs_to :book
end
