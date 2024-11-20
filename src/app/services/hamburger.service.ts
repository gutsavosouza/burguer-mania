import { Injectable } from '@angular/core';
import Hamburger from '../interfaces/hamburger';

@Injectable({
  providedIn: 'root'
})
export class HamburgerService {
    hamburgers: Hamburger[] = [
        {
            hamburger_id: "H001",
            hamburger_name: "Ultimate Bacon Cheeseburger",
            hamburger_description: "A mouthwatering burger loaded with crispy bacon, melted cheddar cheese, fresh lettuce, and juicy beef patty served with a tangy special sauce.",
            hamburger_ingredients: "Beef patty, bacon, cheddar cheese, lettuce, tomato, pickles, special sauce, sesame bun",
            hamburger_price: 12.99,
            hamburger_tag: "Podrão",
            hamburger_image: 'sample-burger.png'
        },
        {
            hamburger_id: "H002",
            hamburger_name: "Classic Beef Burger",
            hamburger_description: "A timeless classic featuring a seasoned beef patty, fresh vegetables, and a soft brioche bun.",
            hamburger_ingredients: "Beef patty, lettuce, tomato, onion, ketchup, mustard, brioche bun",
            hamburger_price: 9.99,
            hamburger_tag: "Clássico",
            hamburger_image: 'sample-burger.png'
        },
        {
            hamburger_id: "H003",
            hamburger_name: "Spicy Jalapeño Burger",
            hamburger_description: "Turn up the heat with this spicy delight, packed with jalapeños, pepper jack cheese, and a fiery chipotle mayo.",
            hamburger_ingredients: "Beef patty, jalapeños, pepper jack cheese, chipotle mayo, lettuce, tomato, sesame bun",
            hamburger_price: 11.49,
            hamburger_tag: "Podrão",
            hamburger_image: 'sample-burger.png'
        },
        {
            hamburger_id: "H004",
            hamburger_name: "Veggie Delight Burger",
            hamburger_description: "A vegetarian favorite with a grilled veggie patty, avocado slices, and a tangy garlic aioli.",
            hamburger_ingredients: "Veggie patty, avocado, lettuce, tomato, garlic aioli, whole-grain bun",
            hamburger_price: 10.49,
            hamburger_tag: "Vegano",
            hamburger_image: 'sample-burger.png'
        },
        {
            hamburger_id: "H005",
            hamburger_name: "Double Trouble Burger",
            hamburger_description: "Twice the fun with two juicy beef patties, double cheese, and a smoky BBQ sauce.",
            hamburger_ingredients: "Two beef patties, cheddar cheese, BBQ sauce, lettuce, pickles, onion rings, sesame bun",
            hamburger_price: 14.99,
            hamburger_tag: "Podrão",
            hamburger_image: 'sample-burger.png'
        },
        {
            hamburger_id: "H006",
            hamburger_name: "Hawaiian Bliss Burger",
            hamburger_description: "A tropical twist featuring a juicy patty, grilled pineapple, ham, and a sweet teriyaki glaze.",
            hamburger_ingredients: "Beef patty, grilled pineapple, ham, teriyaki sauce, lettuce, sesame bun",
            hamburger_price: 11.99,
            hamburger_tag: "Gringo",
            hamburger_image: 'sample-burger.png'
        },
        {
            hamburger_id: "H007",
            hamburger_name: "Mushroom Swiss Burger",
            hamburger_description: "A savory delight with sautéed mushrooms, melted Swiss cheese, and creamy garlic mayo.",
            hamburger_ingredients: "Beef patty, mushrooms, Swiss cheese, garlic mayo, lettuce, brioche bun",
            hamburger_price: 10.99,
            hamburger_tag: "Podrão",
            hamburger_image: 'sample-burger.png'
        },
        {
            hamburger_id: "H008",
            hamburger_name: "Texas BBQ Burger",
            hamburger_description: "Bold and smoky, with BBQ sauce, crispy onion rings, and sharp cheddar cheese.",
            hamburger_ingredients: "Beef patty, BBQ sauce, onion rings, cheddar cheese, pickles, brioche bun",
            hamburger_price: 13.49,
            hamburger_tag: "Gringo",
            hamburger_image: 'sample-burger.png'
        },
        {
            hamburger_id: "H009",
            hamburger_name: "Mediterranean Lamb Burger",
            hamburger_description: "A gourmet choice with a lamb patty, tzatziki sauce, feta cheese, and arugula.",
            hamburger_ingredients: "Lamb patty, tzatziki sauce, feta cheese, arugula, tomato, whole-grain bun",
            hamburger_price: 15.99,
            hamburger_tag: "Podrão",
            hamburger_image: 'sample-burger.png'
        },
        {
            hamburger_id: "H010",
            hamburger_name: "Truffle Burger",
            hamburger_description: "Luxurious and rich with truffle aioli, caramelized onions, and Gruyère cheese.",
            hamburger_ingredients: "Beef patty, truffle aioli, caramelized onions, Gruyère cheese, brioche bun",
            hamburger_price: 17.99,
            hamburger_tag: "Podrão",
            hamburger_image: 'sample-burger.png'
        },
        {
            hamburger_id: "H011",
            hamburger_name: "Smoky Chipotle Chicken Burger",
            hamburger_description: "A smoky chicken burger with chipotle mayo, avocado, and pepper jack cheese.",
            hamburger_ingredients: "Grilled chicken patty, chipotle mayo, avocado, pepper jack cheese, lettuce, sesame bun",
            hamburger_price: 12.49,
            hamburger_tag: "Clássico",
            hamburger_image: 'sample-burger.png'
        },
        {
            hamburger_id: "H012",
            hamburger_name: "Blue Cheese Burger",
            hamburger_description: "A bold choice with crumbled blue cheese, caramelized onions, and a hint of garlic aioli.",
            hamburger_ingredients: "Beef patty, blue cheese, caramelized onions, garlic aioli, lettuce, brioche bun",
            hamburger_price: 13.99,
            hamburger_tag: "Podrão",
            hamburger_image: 'sample-burger.png'
        },
        {
            hamburger_id: "H013",
            hamburger_name: "Mexican Fiesta Burger",
            hamburger_description: "A zesty creation with guacamole, jalapeños, pepper jack cheese, and pico de gallo.",
            hamburger_ingredients: "Beef patty, guacamole, jalapeños, pico de gallo, pepper jack cheese, sesame bun",
            hamburger_price: 12.99,
            hamburger_tag: "Gringo",
            hamburger_image: 'sample-burger.png'
        },
        {
            hamburger_id: "H014",
            hamburger_name: "Cheesy Overload Burger",
            hamburger_description: "For cheese lovers, this burger comes loaded with four types of cheese and a creamy cheese sauce.",
            hamburger_ingredients: "Beef patty, cheddar cheese, Swiss cheese, mozzarella, Parmesan, cheese sauce, brioche bun",
            hamburger_price: 15.49,
            hamburger_tag: "Clássico",
            hamburger_image: 'sample-burger.png'
        },
        {
            hamburger_id: "H015",
            hamburger_name: "Korean BBQ Burger",
            hamburger_description: "A fusion burger with Korean BBQ glaze, kimchi slaw, and sesame seeds.",
            hamburger_ingredients: "Beef patty, Korean BBQ sauce, kimchi slaw, sesame seeds, lettuce, brioche bun",
            hamburger_price: 14.49,
            hamburger_tag: "Gringo",
            hamburger_image: 'sample-burger.png'
        }
    ];
    

  async getAllHamburgers(): Promise<Hamburger[]> {
    const data: Hamburger[] = this.hamburgers;
    
    
    return data;
  }

  async getHamburgerById(hamburguerId: string): Promise<Hamburger | undefined> {
    const data = this.hamburgers.find(hamburguer => hamburguer.hamburger_id === hamburguerId);

    return data;
  }

  getHamburgersByTag(tag: string): Hamburger[] {
    const parsedTag = tag.toLowerCase();

    return this.hamburgers.filter(hamburger => hamburger.hamburger_tag.toLowerCase() === parsedTag);
  }

  getAllCategories(): string[] {
    const categories = new Set<string>();
    this.hamburgers.forEach(hamburger => {
      if (hamburger.hamburger_tag) {
        categories.add(hamburger.hamburger_tag);
      }
    });
    return Array.from(categories);
  }
  

  constructor() { }
}
