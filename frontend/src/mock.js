// Mock data for Creamy Creations & Creamy Cafe (local images from /public/images)

export const menuItems = {
  hotDrinks: [
    {
      id: 1,
      name: "Signature Cappuccino",
      price: "Rs. 450",
      description: "Rich espresso with steamed milk and microfoam",
      featured: true,
      image: "/images/coffee.jpg",
      layers: [
        { name: "Espresso Shot", color: "#8B4513", delay: 0 },
        { name: "Steamed Milk", color: "#F5DEB3", delay: 0.5 },
        { name: "Milk Foam", color: "#FFFAF0", delay: 1 },
        { name: "Cinnamon Dust", color: "#D2691E", delay: 1.5 }
      ]
    },
    {
      id: 2,
      name: "Hot Chocolate ",
      price: "Rs. 750",
      description: "Premium chocolate with whipped cream and marshmallows",
      image: "/images/hot chocolate.jpg",
      // layers: [
      //   { name: "Dark Chocolate", color: "#3C1810", delay: 0 },
      //   { name: "Hot Milk", color: "#F5DEB3", delay: 0.3 },
      //   { name: "Whipped Cream", color: "#FFFAF0", delay: 0.6 },
      //   { name: "Marshmallows", color: "#FFB6C1", delay: 0.9 }
      // ]
    },
    {
      id: 3,
      name: "White Hot Chocolate",
      price: "Rs. 280",
      description: "Rich and smooth hot chocolate with white chocolate",
      image: "/images/White Hot Chocolate .jpg"
    },
    // {
    //   id: 4,
    //   name: "Latte",
    //   price: "Rs. 420",
    //   description: "Smooth espresso with steamed milk",
    //   image: "/images/hot_latte.jpg"
    // },
    {
      id: 5,
      name: "Mocha Cappuccino",
      price: "Rs. 980",
      description: "Coffee meets chocolate perfection",
      image: "/images/Mocha Cappuccino.jpg"
    }
  ],
  coldDrinks: [
    // {
    //   id: 6,
    //   name: "Iced Coffee",
    //   price: "Rs. 350",
    //   description: "Refreshing cold brew over ice",
    //   image: "/images/cold_iced_coffee.jpg"
    // },
    {
      id: 7,
      name: "Oreo Shake",
      price: "Rs. 480",
      description: "Creamy oreo shake with whipped cream",
      image: "/images/oreo shake.jpg"
    },
    {
      id: 8,
      name: "Coconut Frappauccino",
      price: "Rs. 1300",
      description: "Rich cocunut milkshake with wipped cream",
      image: "/images/ Coconut Frappe.jpg"
    },
    {
      id: 9,
      name: "Virgin Pomegranate Mocktail",
      price: "Rs. 420",
      description: "Fresh Pomegranate with sparkling lime and Pomegranate infuced soda created to perfection",
      image: "/images/ Virgin Pomegranate Mocktail.jpg"
    },
    {
      id: 10,
      name: "Iced Caramel Latte",
      price: "Rs. 950",
      description: "Refreshing tea served cold",
      image: "/images/Caramel Latte.jpg"
    }
  ],
  food: [
    {
      id: 11,
      name: "Creamy Chicken Signiture Burger ",
      price: "Rs. 1200",
      description: "Crispy Chicken with inhouse creamy white sauce and vegetables",
      image: "/images/Creamy Chicken Signiture  Burger.jpg"
    },
    {
      id: 12,
      name: "Butter Chicken Sandwitch",
      price: "Rs. 720",
      description: "Sri Lankan street food favorite",
      image: "/images/Butter Chicken Sandwich.jpg"
    },
    {
      id: 13,
      name: "Club Sandwich",
      price: "Rs. 580",
      description: "Flavourful butter chicken sandwich ",
      image: "/images/Butter Chicken Sandwich.jpg"
    },
    // {
    //   id: 14,
    //   name: "Garlic Bread",
    //   price: "Rs. 320",
    //   description: "Toasted bread with garlic butter",
    //   image: "/images/food_garlic_bread.jpg"
    // }
  ],
  desserts: [
    {
      id: 15,
      name: "Eggless chocolate Cake ",
      price: "Rs. 450",
      description: "For vegitarians a soft and smooth eggless chocolate cake",
      image: "/images/Eggless chocolate Cake.jpg"
    },
    // {
    //   id: 16,
    //   name: "Chocolate Cake",
    //   price: "Rs. 380",
    //   description: "Rich chocolate cake slice",
    //   image: "/images/dessert_chocolate_cake.jpg"
    // },
    {
      id: 17,
      name: "Chocolate Lava Cake & Salted Caramel Ice Cream",
      price: "Rs. 420",
      description: "hot and melting chocolate lava cake served with salted caramel ice cream",
      image: "/images/Chocolate Lava cake & Salted Caramel Ice Cream.jpg"
    },
    // {
    //   id: 18,
    //   name: "Ice Cream Sundae",
    //   price: "Rs. 350",
    //   description: "Vanilla ice cream with toppings",
    //   image: "/images/dessert_sundae.jpg"
    // }
  ]
};

export const shopInfo = {
  name: "Creamy Creations & Creamy Cafe",
  tagline: "Where every sip tells a story",
  email: "creamycreations1808@gmail.com",
  phone: "076 658 7149",
  address: "67/2 Kandy Road, Jaffna, Sri Lanka, 40000",
  floors: { ground: "Coffee Shop", first: "Food Shop" },
  hours: { weekdays: "7:00 AM - 10:00 PM", weekends: "7:00 AM - 11:00 PM" }
};

export const testimonials = [
  { id: 1, name: "Amara Silva", rating: 5, text: "The best cappuccino in Jaffna! The atmosphere is perfect for both work and relaxation." },
  { id: 2, name: "Rajesh Kumar", rating: 5, text: "Amazing food on the first floor. The kottu roti is authentic and delicious!" },
  { id: 3, name: "Priya Nair", rating: 5, text: "Love the innovative presentation of their drinks. The staff is incredibly friendly." }
];
