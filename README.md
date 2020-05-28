# Honest Book reviews.

A library where you can give an honest review.

Some of the core features of the platform:

- List all books in library.
- Open the page for a single book and read all reviews.
- Check the average score left by others.
- Create a new book (TBI)

## Built With

- Ruby,
- Ruby on Rails,
- Html & CSS
- React
- Postgresql

## Live Demo

[Live version :gem:](https://infinite-meadow-25243.herokuapp.com/).

## Getting Started

This APP will use PostgreSQL, so make sure you have it installed in your development and test environment. This could be changed in the `./config/database.yml` file if needed.

Also note that the database expects to have a specific user with a password (also in `database.yml` file).

Feel free to create more entries in the `db/seeds.rd` file to generate more content.

To get started with the APP, clone the repo and then install the needed gems:

```
$ bundle install --without production
```

Next, migrate the database:

```
$ rails db:migrate
```

Then, make many moc data to interaction:

```
$ rails db:seed
```

Finally, run the test suite to verify that everything is working correctly:

```
$ rails test
```

If the test suite passes, you'll be ready to run the app in a local server:

```
$ rails server
```

## Author

**Alisson Peres**

- Github: [@alissonperes](https://github.com/alissonperes)
- Linkedin: [linkedin](https://www.linkedin.com/in/alissonperes/)

## Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.
