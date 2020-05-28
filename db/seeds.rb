# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

books = Book.create([
  {
    title:"Frankenstein",
    author:"Mary Shelly",
    year: 1818
  },
  {
    title:"Dracula",
    author:"Bram Stoker",
    year: 1897
  },
  {
    title:"Strange Case of Dr Jekyll and Mr Hyde",
    author:"Robert Louis Stevenson",
    year: 1886
  },
  {
    title:"The Picture of Dorian Gray",
    author:"Oscar Wilde",
    year: 1890
  },
  {
    title:"The Shining",
    author:"Stephen King",
    year: 1980
  },
  {
    title:"The Call of Cthulhu",
    author:" H.P. Lovecraft",
    year: 1926
  },
  {
    title:"The Brothers Karamazov",
    author:"Fyodor Dostoevsky",
    year: 1879
  },
  {
    title:"The 120 Days of Sodom",
    author:"Marquis de Sade",
    year: 1785
  },
])


reviews = Review.create([
  {
    title: "Great Book",
    description: "Had a great time reading.",
    score: 5,
    book: books.first
  },
  {
    title: "Best book EVER",
    description: "Life changing.",
    score: 5,
    book: books.second
  },
  {
    title: "Best book I read in years",
    description: "One of the best, and also a classic.",
    score: 5,
    book: books.third
  },
  {
    title: "Very good book",
    description: "Loved the story, not the ending.",
    score: 4,
    book: books.first
  },
  ])
