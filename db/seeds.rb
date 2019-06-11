# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

50.times do
  Department.create(
  name:  Faker:: Commerce.department
  )
end

puts "seeded departments"

# 50.times do
#   Item.create(
#     description: Faker::Lorem.sentence,
#     price: Faker::Commerce.price.to_s,
#   )
# end

puts "seeded items"
