# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'

9.times do
    Greeting.create(quote: Faker::Quote.famous_last_words, author: "Last Words")
    Greeting.create(quote: Faker::Quote.jack_handey, author: "Jack Handey")
    Greeting.create(quote: Faker::Quote.robin, author: "Robin")
    Greeting.create(quote: Faker::Quote.matz, author: "Matz")
    Greeting.create(quote: Faker::Quote.singular_siegler, author: "Singular Siegler")
    Greeting.create(quote: Faker::Quote.yoda, author: "Yoda")
end
