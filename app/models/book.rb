class Book < ApplicationRecord
  has_many :reviews, dependent: :destroy
  validates :title, presence: true, uniqueness: {message: "Title already exists" }
  validates :author, presence: true

  before_create :slugify

  def slugify
    self.slug = title.to_s.parameterize
  end

  def avg_score
    reviews.average(:score).to_f.round(2)
  end
end
