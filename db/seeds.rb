# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.destroy_all

Todo.create(title: 'Grocery', body: 'milk')
Todo.create(title: 'Watch', body: 'Lord of the Rings')
Todo.create(title: 'Chore', body: 'Clean Room')
Todo.create(title: 'Workout', body: 'Cardio')

#  t.string "title"
# t.text "body"