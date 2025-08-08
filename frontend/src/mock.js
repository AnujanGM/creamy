// Mock data for Creamy Creations & Creamy Cafe

export const menuItems = {
  hotDrinks: [
    {
      id: 1,
      name: "Signature Cappuccino",
      price: "Rs. 450",
      description: "Rich espresso with steamed milk and microfoam",
      featured: true,
      layers: [
        { name: "Espresso Shot", color: "#8B4513", delay: 0 },
        { name: "Steamed Milk", color: "#F5DEB3", delay: 0.5 },
        { name: "Milk Foam", color: "#FFFAF0", delay: 1 },
        { name: "Cinnamon Dust", color: "#D2691E", delay: 1.5 }
      ]
    },
    {
      id: 2,
      name: "Hot Chocolate Supreme",
      price: "Rs. 520",
      description: "Premium chocolate with whipped cream and marshmallows",
      layers: [
        { name: "Dark Chocolate", color: "#3C1810", delay: 0 },
        { name: "Hot Milk", color: "#F5DEB3", delay: 0.3 },
        { name: "Whipped Cream", color: "#FFFAF0", delay: 0.6 },
        { name: "Marshmallows", color: "#FFB6C1", delay: 0.9 }
      ]
    },
    {
      id: 3,
      name: "Espresso",
      price: "Rs. 280",
      description: "Pure, intense coffee shot"
    },
    {
      id: 4,
      name: "Latte",
      price: "Rs. 420",
      description: "Smooth espresso with steamed milk"
    },
    {
      id: 5,
      name: "Mocha",
      price: "Rs. 480",
      description: "Coffee meets chocolate perfection"
    }
  ],
  coldDrinks: [
    {
      id: 6,
      name: "Iced Coffee",
      price: "Rs. 350",
      description: "Refreshing cold brew over ice"
    },
    {
      id: 7,
      name: "Vanilla Milkshake",
      price: "Rs. 480",
      description: "Creamy vanilla shake with whipped cream"
    },
    {
      id: 8,
      name: "Chocolate Milkshake",
      price: "Rs. 500",
      description: "Rich chocolate milkshake"
    },
    {
      id: 9,
      name: "Strawberry Smoothie",
      price: "Rs. 420",
      description: "Fresh strawberries blended to perfection"
    },
    {
      id: 10,
      name: "Iced Tea",
      price: "Rs. 280",
      description: "Refreshing tea served cold"
    }
  ],
  food: [
    {
      id: 11,
      name: "Chicken Fried Rice",
      price: "Rs. 680",
      description: "Aromatic rice with tender chicken pieces"
    },
    {
      id: 12,
      name: "Kottu Roti",
      price: "Rs. 720",
      description: "Sri Lankan street food favorite"
    },
    {
      id: 13,
      name: "Club Sandwich",
      price: "Rs. 580",
      description: "Triple-layered sandwich with chicken and vegetables"
    },
    {
      id: 14,
      name: "Garlic Bread",
      price: "Rs. 320",
      description: "Toasted bread with garlic butter"
    }
  ],
  desserts: [
    {
      id: 15,
      name: "Belgian Waffles",
      price: "Rs. 450",
      description: "Crispy waffles with syrup and fruits"
    },
    {
      id: 16,
      name: "Chocolate Cake",
      price: "Rs. 380",
      description: "Rich chocolate cake slice"
    },
    {
      id: 17,
      name: "Cheesecake",
      price: "Rs. 420",
      description: "Creamy New York style cheesecake"
    },
    {
      id: 18,
      name: "Ice Cream Sundae",
      price: "Rs. 350",
      description: "Vanilla ice cream with toppings"
    }
  ]
};

export const shopInfo = {
  name: "Creamy Creations & Creamy Cafe",
  tagline: "Where every sip tells a story",
  email: "creamycreations1808@gmail.com",
  phone: "076 658 7149",
  address: "67/2 Kandy Road, Jaffna, Sri Lanka, 40000",
  floors: {
    ground: "Coffee Shop",
    first: "Food Shop"
  },
  hours: {
    weekdays: "7:00 AM - 10:00 PM",
    weekends: "7:00 AM - 11:00 PM"
  }
};

export const testimonials = [
  {
    id: 1,
    name: "Amara Silva",
    rating: 5,
    text: "The best cappuccino in Jaffna! The atmosphere is perfect for both work and relaxation."
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    rating: 5,
    text: "Amazing food on the first floor. The kottu roti is authentic and delicious!"
  },
  {
    id: 3,
    name: "Priya Nair",
    rating: 5,
    text: "Love the innovative presentation of their drinks. The staff is incredibly friendly."
  }
];