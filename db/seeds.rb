# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'

Greeting.create(quote: Faker::Quote.famous_last_words)
Greeting.create(quote: Faker::Quote.jack_handey)
Greeting.create(quote: Faker::Quote.robin)
Greeting.create(quote: Faker::Quote.matz)
Greeting.create(quote: Faker::Quote.singular_siegler)
Greeting.create(quote: Faker::Quote.yoda)
