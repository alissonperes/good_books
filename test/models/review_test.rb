require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  test "Should not save review without title" do
    new_book = Book.new(title:"Title New Book", author: "Author")
    review = new_book.reviews.new
    assert_not review.save
  end

  test "Should not save review without score" do
    new_book = Book.new(title:"Title New Book", author: "Author")
    review = new_book.reviews.new(title:"new review")
    assert_not review.save
  end

  test "Should not save review without book" do
    review = Review.new(title:"new review", score: 5)
    assert_not review.save
  end
end
