Cart.destroy_all
User.destroy_all
Product.destroy_all
Category.destroy_all

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name:Faker::Name.name ,username: Faker::Internet.username,email: Faker::Internet.email,password:Faker::Internet.password,isAdmin: true )
User.create(name:Faker::Name.name ,username: Faker::Internet.username,email: Faker::Internet.email,password:Faker::Internet.password,isAdmin: false)
User.create(name:Faker::Name.name ,username: Faker::Internet.username,email: Faker::Internet.email,password:Faker::Internet.password,isAdmin: false)
User.create(name:Faker::Name.name ,username: Faker::Internet.username,email: Faker::Internet.email,password:Faker::Internet.password,isAdmin: false)
User.create(name:Faker::Name.name ,username: Faker::Internet.username,email: Faker::Internet.email,password:Faker::Internet.password,isAdmin: false)
User.create(name:Faker::Name.name ,username: Faker::Internet.username,email: Faker::Internet.email,password:Faker::Internet.password,isAdmin:true )
User.create(name:Faker::Name.name ,username: Faker::Internet.username,email: Faker::Internet.email,password:Faker::Internet.password,isAdmin: false)
User.create(name:Faker::Name.name ,username: Faker::Internet.username,email: Faker::Internet.email,password:Faker::Internet.password,isAdmin: false)
User.create(name:Faker::Name.name ,username: Faker::Internet.username,email: Faker::Internet.email,password:Faker::Internet.password,isAdmin: false)
User.create(name:Faker::Name.name ,username: Faker::Internet.username,email: Faker::Internet.email,password:Faker::Internet.password,isAdmin: false)
User.create(name:Faker::Name.name ,username: Faker::Internet.username,email: Faker::Internet.email,password:Faker::Internet.password,isAdmin: false)


category_id = Category.all.sample.id 
Product.create(name: "Brocolli",category_id:category_id ,product_description: "Broccoli is an edible green plant in the cabbage family whose large flowering head, stalk and small associated leaves are eaten as a vegetable.Final cost by weight",image:"https://solidstarts.com/wp-content/uploads/Broccoli_edited-scaled.jpg" ,price:1.57 ,stock: 10)
Product.create(name: "Cumin Seeds",category_id:category_id ,product_description:"Cumin is a flowering plant in the family Apiaceae, native to the Irano-Turanian Region. Its seeds – each one contained within a fruit, which is dried – are used in the cuisines of many cultures in both whole and ground form" ,image:"https://m.media-amazon.com/images/I/51WXn0g0duL._SX425_.jpg" ,price: 4.99,stock: 6 )
Product.create(name: "Cabbage",category_id:category_id,product_description:"Cabbage, comprising several cultivars of Brassica oleracea, is a leafy green, red, or white biennial plant grown as an annual vegetable crop for its dense-leaved heads" ,image: "https://www.gardeningknowhow.com/wp-content/uploads/2020/03/primo-vantage-400x350.jpg",price: 8 ,stock:4)
Product.create(name: "Eggs",category_id:category_id,product_description:"Farmers Hen House Free-range Organic Grade A Large Brown Eggs Are Raised On Amish And Mennonite Family Farms. Our Organic Large Brown Eggs Come From Vegetarian-fed, Free-range Hens That Are Humanely Raised And Handled To Ensure You Get The Most Wholesome And Nutritious Eggs For Your Family's Meals. This Carton Contains 12 Large Brown Eggs." ,image:"http://images.squarespace-cdn.com/content/v1/568d82dbb204d5990c9bb12b/1592228696200-D4VRIZT8EPDJIATLLURB/Eggs.jpg" ,price: 5,stock: 2)
Product.create(name: "Mozzarella Cheese",category_id:category_id,product_description: "Mauro & Gianni Fresh Mozzarella Cheese Provides A Mild And Milky Flavor With Zero Trans Fats. Keep An 8 Oz. Package Of This Cheese In Your Fridge To Make Your Own Pizza From Scratch With The Freshest Ingredients Available. Each Ball Offers Eight Servings Of 1 Oz. Each With Only 70 Calories. Add This Fresh Mozzarella To A Salad, Or Use It Dress Up An Ordinary Sandwich For A Burst Of Creamy Flavor.",image: "https://m.media-amazon.com/images/I/71Qa7Rhp30L._SL1500_.jpg",price: 11.5,stock: 2)
Product.create(name: "Sourdough Bread",category_id:category_id,product_description:"Great bread starts with the best ingredients and all natural sourdough starter. This is why we at izzio collaborated with our local farmers and millers to create a custom flour made from wheat we can trace back to the farm. This is how we know our flour is pure, with out GMO's, and without any unnecessary enrichment of additives." ,image: "https://hips.hearstapps.com/hmg-prod/images/sourdough-bread-horizontal-half-1547669255.png",price:25 ,stock: 6 )
Product.create(name: "Jam",category_id:category_id,product_description: "Combining The Highest Quality Strawberries Available, Bonne Maman Strawberry Preserves Pairs Perfectly With Goat Cheese, Waffles And Pancakes." ,image: "https://i5.walmartimages.com/asr/f700e23d-d558-47be-aeaa-aa12a2cb3fd9_1.2e55283fc9a7751596cf6a9805799e25.jpeg",price: 1.4,stock: 10)
Product.create(name: "All purpose Flour",category_id:category_id,product_description:"Bob's Red Mill, Flour, Unbleached White All-purpose Makes For A Memorable And Satisfying Experience. This Product Is Full Of Wholesome Goodness And Irresistible Flavor. Bob's Red Mill, Flour,",image:"https://www.bobsredmill.com/media/catalog/product/cache/011b25e59bfe33b260293c51833a20b4/1/5/1560c054_allpurposeflour_f_1800_1.jpg" ,price: 10.99,stock: 4)
Product.create(name: "Atlantic Salmon",category_id:category_id,product_description: "Salmon is a common food fish classified as an oily fish with a rich content of protein and omega-3 fatty acid",image:"https://images.squarespace-cdn.com/content/v1/5e2755963c421657bd408970/1595246949777-GMG08O180MBPXSS0PYI0/EWP2019_KVAROY-379.jpg?format=1000w" ,price: 55.58,stock: 3)
Product.create(name: "The Butcher Shop 85% Natural Ground Beef",category_id:category_id,product_description:"It is categorized as red meat — a term used for the meat of mammals, which contains higher amounts of iron than chicken or fish. ",image:"https://i5.walmartimages.com/asr/c488097d-cd02-491d-9ba1-06414593dad5_3.86f74d35f449351329d6723151047398.jpeg" ,price: 40.66,stock: 8)
Product.create(name: "Gluten Free Spinach Herb Tortilla Wraps",category_id:category_id,product_description: "Heating Instructions: For best results: Medium heat in skillet for 10 to 15 seconds per side. Place 4 to 6 tortillas between two damp paper towels for 30 to 45 seconds. For freshness, refrigerate after opening.",image: "https://missionfoods.com/uploads/gluten-free-spinach-wraps.png",price: 10.99,stock: 5)
Product.create(name: "Brownie & Cookie Dough Ice Cream",category_id:category_id,product_description:"Enlightened Brownies & Cookie Dough Ice Cream Features Chunks Of Soft Chocolate Chip Cookie Dough And Chewy Fudge Brownie With Milk Chocolate Ice Cream. One Serving Contains 7 G. Of Protein, 6 G. Of Sugar And 100 Calories. Each 1 Pt. Cup Is Kosher-dairy And Doesn't Contain Rbgh/bst Hormones. See Nutrition Panel For Allergen Information." ,image: "https://i.mctimg.com/cdn-cgi/image/w=400,h=400,fit=pad/https://i.mctimg.com/file/bec19b6e1ac766d394c1b3783a630a8cfa0e2034/f7459a96911c460437c4ea620699c01b53639a3b6eed314a43aee2ae72e2b392",price: 5.99,stock: 4)
Product.create(name: "Ultimate Beefless Ground",category_id:category_id,product_description:"Gardein Beefless, Ground Is Made With Plant Protein And Ready In Minutes For Great Tacos, Shepherd's Pie, Bolognese And More. This Meatless Beef Is Gluten-free, Vegan, Kosher And Non-GMO With 0 Mg. Of Cholesterol And 110 Calories Per Serving. Each Bag Of Gardein Beefless, Ground Contains 13.7 Oz. Of Product." ,image: "https://www.kroger.com/product/images/xlarge/front/0084223400098",price:4.79 ,stock: 2)
Product.create(name: "Island Farms Cool Cauliflower",category_id:category_id,product_description: "Stahlbush Island Farms Cool Cauliflower Blend Brings A Colorful Addition To Evening Meals With 10 Oz. Of Purple, Green, Orange And White Cauliflower Frozen For Convenience And A Longer Shelf Shelf. Help Your Family Get More Fiber And Potassium Alongside Just 15 Calories Per 1/2 Cup Of This Hearty Vegetable. Substitute The Light Taste Of Cauliflower To Stand In For Heavier, Starch-based Sides Such As Rice Or Potatoes. Serve With Seasonings, Cheese Sauce Or Dipping Sauce For Extra Flavor.",image: "https://www.stahlbush.com/wp-content/uploads/2020/04/Cool-Cauliflower-Tri-Colored-Cauliflower-10oz-square.png",price: 11.47,stock: 10 )
Product.create(name: "Siete Hint Of Serrano Sea Salt & Vinegar Kettle Cooked Potato Chips",category_id:category_id,product_description: "Made with 100% avocado oil. Mexican style papitas. Vegan. Certified gluten-free. Dairy free & soy free. Grain free. Non GMO Project verified. nongmoproject.org. Avocado Oil. Hint of serrano. Enjoy with family, friends, and neighbors because together is better! Embarrassing family photo. ",image:"https://www.texasfood.com/images/D/SIETE_SEASALT%26VINEGARCHIPS.jpg" ,price: 5.70,stock: 2 )
Product.create(name: "Blue Buffalo Tastefuls Chicken Entree Pate Canned Cat Food",category_id:category_id,product_description: "BLUE Tastefuls cat food is so delicious, your cat will keep coming back for more. This silky-smooth paté starts with real chicken as the first ingredient, plus wholesome brown rice and sweet potatoes. Made from the finest natural ingredients enhanced with vitamins, minerals and other nutrients, Tastefuls canned food has the great taste cats want with the healthy ingredients you prefer feeding. Let your cat try this mouthwatering wet cat food to see why one taste is all it takes!",image: "https://images.heb.com/is/image/HEBGrocery/004878546?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0",price: 1.79,stock: 5)
Product.create(name: "Mrs. Meyer's Clean Day Multi-Surface Everyday Cleaner Honeysuckle Scent",category_id:category_id,product_description: "• Quick and easy multi surface spray removes stuck on dirt, • A fresh way to clean, refresh, and remove odors from non-porous surfaces throughout the house, • Garden-fresh Honeysuckle cleaner has a tempting sweet scent – a charming mix of flowers and fruits, • Safe to use as a hardwood floor cleaner, tile cleaner, on countertops, walls and more, • Mrs. Meyer's produces cruelty free cleaners. None of our products are tested on animals, • Multi purpose cleaner for use in the kitchen, bathroom, and other rooms throughout the house",image: "https://s3.images-iherb.com/mrs/mrs11441/l/14.jpg",price: 10.99,stock: 10)
Product.create(name: " 100% Recycled Soft & Strong Bath Tissue 12 Pack",category_id:category_id,product_description:"eventh Generation 100% Recycled Paper* Bath Tissue is an extra strong and soft 2-ply toilet paper whitened without chlorine bleach. It?s gentle on the environment, septic-safe and RV-friendly, too.For more than 25 years, Seventh Generation has been thoughtfully formulating safe and effective plant-based products that work. Really well. " ,image:"https://i5.walmartimages.com/asr/be1bc214-4671-425d-8c90-922d698d0d6a_2.9ab1575e8cbe065199012524c72f81f9.jpeg" ,price: 50.99,stock: 3)
Product.create(name: "Nature's Way Alive! Once Daily ",category_id:category_id,product_description:"Complete ultra potency daily multivitamin supplement for men. With high potency B-vitamins to help convert food into fuel, including the active form of B-12 and folate.* Supports eye health, bone health, heart health, immune health, muscle function, and energy metabolism.* With food-based powder blends including Daily Greens, Orchard Fruits & Garden Veggies powder blend, Cardio, and Digestive Enzyme. Gluten-free. No artificial colors." ,image:"https://m.media-amazon.com/images/I/71W14GOhB1L._AC_SL1500_.jpg" ,price: 20.99,stock: 1)

10.times do
    product_id = Product.all.sample.id
    user_id = User.all.sample.id
    Cart.create(product_id: product_id,user_id: user_id,quantity: rand(1..10))
end



Category.create(category_name: "Vegetables")
Category.create(category_name: "Spices & Condiments")
Category.create(category_name: "Dairy")
Category.create(category_name: "Dairy")
Category.create(category_name: "Bakery & Deli Items")
Category.create(category_name: "Bakery & Deli Items")
Category.create(category_name: "Bakery & Deli Items")
Category.create(category_name: "Baking")
Category.create(category_name: "Meat & Seafood")
Category.create(category_name: "Meat & Seafood")
Category.create(category_name: "Bakery & Deli Items")
Category.create(category_name: "Frozen")
Category.create(category_name: "Frozen")
Category.create(category_name: "Frozen")
Category.create(category_name: "Snacks")
Category.create(category_name: "Pets")
Category.create(category_name: "Household")
Category.create(category_name: "Vitamins & Supplements")



