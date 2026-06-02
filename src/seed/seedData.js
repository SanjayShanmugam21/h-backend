export const categorySeed = [
  {
    name: 'Biryani',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=300',
    description: 'Royal Aromatic Rice Dishes with hand-picked spices.'
  },
  {
    name: 'Non-Veg',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80&w=300',
    description: 'Savory Chicken and Beef delicacies from our master chef.'
  },
  {
    name: 'Beverages',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=300',
    description: 'Refreshing Milk & Traditional Indian Drinks.'
  },
  {
    name: 'Sodas',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=300',
    description: 'Chilled Fizzy Delights to spark your meal.'
  },
  {
    name: 'Mojitos',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=300',
    description: 'Premium Coolers with fresh mint and lime.'
  }
];

export const foodSeed = [
  // BIRYANI (Category Index 0)
  {
    name: 'Chicken Biriyani',
    image: '/images/chicken_biryani.png',
    price: 100,
    rating: 4.9,
    description: 'Tender chicken cooked with fragrant rice & royal spices.',
    categoryIndex: 0
  },
  {
    name: 'Beef Biriyani',
    image: '/images/beef_biryani.png',
    price: 100,
    rating: 4.8,
    description: 'Juicy beef cooked in rich, aromatic biryani spices.',
    categoryIndex: 0
  },
  {
    name: 'Chilli Biriyani',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=600',
    price: 120,
    rating: 4.7,
    description: 'Spicy & bold biryani with a fiery kick.',
    categoryIndex: 0
  },
  {
    name: 'Plain Biriyani',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600',
    price: 70,
    rating: 4.5,
    description: 'Simple, classic & flavorful biryani.',
    categoryIndex: 0
  },
  {
    name: 'Ghee Rice',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b52c67ad5?auto=format&fit=crop&q=80&w=600',
    price: 80,
    rating: 4.6,
    description: 'Fragrant rice enriched with pure ghee and cashews.',
    categoryIndex: 0
  },

  // NON-VEG (Category Index 1)
  {
    name: 'Chicken Chukka',
    image: '/images/chicken_65.png',
    price: 100,
    rating: 4.8,
    description: 'Spicy & flavorful traditional chicken chukka.',
    categoryIndex: 1
  },
  {
    name: 'Pepper Chicken',
    image: '/images/pepper_chicken.png',
    price: 100,
    rating: 4.9,
    description: 'Peppery goodness in every bite, roasted to perfection.',
    categoryIndex: 1
  },
  {
    name: 'Chicken 65',
    image: '/images/chicken_65.png',
    price: 70,
    rating: 4.7,
    description: 'Classic spicy deep-fried chicken appetizer.',
    categoryIndex: 1
  },
  {
    name: 'Beef Chukka',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600',
    price: 100,
    rating: 4.8,
    description: 'Tender beef with bold South Indian spices.',
    categoryIndex: 1
  },
  {
    name: 'Beef 65',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80&w=600',
    price: 70,
    rating: 4.6,
    description: 'Crispy beef chunks with a spicy twist.',
    categoryIndex: 1
  },

  // BEVERAGES (Category Index 2)
  {
    name: 'Rose Milk',
    image: '/images/rose_milk.png',
    price: 30,
    rating: 4.9,
    description: 'Refreshing chilled rose-flavored milk.',
    categoryIndex: 2
  },
  {
    name: 'Rose Milk Special',
    image: '/images/rose_milk.png',
    price: 50,
    rating: 4.9,
    description: 'Premium rose milk with added nuts and cream.',
    categoryIndex: 2
  },
  {
    name: 'Badam Milk',
    image: 'https://images.unsplash.com/photo-1596797038530-2c39bb804301?auto=format&fit=crop&q=80&w=600',
    price: 30,
    rating: 4.7,
    description: 'Traditional almond flavored milk.',
    categoryIndex: 2
  },
  {
    name: 'Ilaneer Sarbath',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
    price: 30,
    rating: 4.8,
    description: 'Cooling tender coconut sarbath.',
    categoryIndex: 2
  },
  {
    name: 'Jigarthanda',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600',
    price: 70,
    rating: 4.9,
    description: 'Madurai famous cooling dessert drink.',
    categoryIndex: 2
  },

  // SODAS (Category Index 3)
  {
    name: 'Lemon Soda',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
    price: 30,
    rating: 4.5,
    description: 'Classic refreshing lemon soda.',
    categoryIndex: 3
  },
  {
    name: 'Mint Soda',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
    price: 40,
    rating: 4.6,
    description: 'Cooling mint infused soda.',
    categoryIndex: 3
  },
  {
    name: 'Chilli Salt Soda',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
    price: 40,
    rating: 4.5,
    description: 'Spicy and tangy salted soda.',
    categoryIndex: 3
  },

  // MOJITOS (Category Index 4)
  {
    name: 'Blue Curacao Mojito',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600',
    price: 50,
    rating: 4.8,
    description: 'Vibrant blue citrus mojito sparkler.',
    categoryIndex: 4
  },
  {
    name: 'Strawberry Mojito',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
    price: 50,
    rating: 4.7,
    description: 'Sweet and tangy strawberry mint cooler.',
    categoryIndex: 4
  },
  {
    name: 'Mint Mojito',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
    price: 50,
    rating: 4.8,
    description: 'Classic refreshing mint and lime mojito.',
    categoryIndex: 4
  }
];
