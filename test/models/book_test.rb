require 'test_helper'

class BookTest < ActiveSupport::TestCase
  test "Should not save book without title " do
    new_book = Book.new
    assert_not new_book.save
  end

  test "Should not save book without author" do
    new_book = Book.new(title:"Title")
    assert_not new_book.save
  end

  test "slugify should parameterize title" do
    new_book = Book.new(title:"Title New Book", author: "Author")
    assert_equal "title-new-book", new_book.slugify
  end

  test "Book average should return float" do
    new_book = Book.new(title:"Title New Book", author: "Author")
    first_review = new_book.reviews.new(title:"First", score: 5)
    second_review = new_book.reviews.new(title:"Second", score: 5)

    assert new_book.avg_score, 5.0
  end
end
