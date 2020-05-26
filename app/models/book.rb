class Book < ApplicationRecord
  has_many :reviews

  before_create :slugify

  def slugify
    self.slug = title.parameterize
  end

  def avg_score
    reviews.average(:score).round(2).to_f
  end
end
