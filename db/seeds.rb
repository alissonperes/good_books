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
  },
  {
    title:"Dracula",
    author:"Bram Stoker",
  },
  {
    title:"Strange Case of Dr Jekyll and Mr Hyde",
    author:"Robert Louis Stevenson",
  },
  {
    title:"The Picture of Dorian Gray",
    author:"Oscar Wilde",
  },
  {
    title:"The Shining",
    author:"Stephen King",
  },
  {
    title:"The Call of Cthulhu",
    author:" H.P. Lovecraft",
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
