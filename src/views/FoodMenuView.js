import { createElement } from "../utils.js"
import ricePorkSmall from '../assets/rice-pork-small.jpg'
import ricePorkMedium from '../assets/rice-pork-medium.jpg'
import sushiSmall from '../assets/sushi-small.jpg'
import sushiMedium from '../assets/sushi-medium.jpg'
import FoodList from "../components/FoodList.js"


export default function FoodMenuView() {
    const section = createElement('section','food-section')
    const foodList = FoodList(foods)
    section.append(foodList)
    return section
}

const foods = [
    {
        name: 'Pork & Rice Harmony',
        description: 'Experience a delightful culinary journey with our Pork & Rice Harmony bowl, where tender, marinated pork meets fluffy jasmine rice in a symphony of flavors. The pork is expertly seared to perfection, infused with a blend of savory spices and a hint of sweetness, creating a rich, mouthwatering profile.',
        url: {
            small: ricePorkSmall,
            medium: ricePorkMedium
        }    
    },
    {
        name: 'Sushi Serenade',
        description: "Indulge in a culinary masterpiece with our Sushi Serenade, a vibrant platter that showcases the artistry of traditional sushi-making. This exquisite selection features an array of freshly prepared rolls, each crafted with the finest sushi-grade fish, crisp vegetables, and perfectly seasoned rice. From classic California rolls to inventive specialty creations, every piece is a harmony of flavors and textures, complemented by a delicate touch of wasabi and pickled ginger. The platter is artfully arranged to celebrate the beauty of the ocean’s bounty, making it perfect for sharing or savoring solo. Dive into this delightful experience and let your taste buds be serenaded by the fresh, exquisite flavors of the sea!",
        url: {
            small:sushiSmall,
            medium: sushiMedium
        }
    },
    {
        name: 'Pork & Rice Harmony',
        description: 'Experience a delightful culinary journey with our Pork & Rice Harmony bowl, where tender, marinated pork meets fluffy jasmine rice in a symphony of flavors. The pork is expertly seared to perfection, infused with a blend of savory spices and a hint of sweetness, creating a rich, mouthwatering profile.',
        url: {
            small: ricePorkSmall,
            medium: ricePorkMedium
        }    
    },
    {
        name: 'Sushi Serenade',
        description: "Indulge in a culinary masterpiece with our Sushi Serenade, a vibrant platter that showcases the artistry of traditional sushi-making. This exquisite selection features an array of freshly prepared rolls, each crafted with the finest sushi-grade fish, crisp vegetables, and perfectly seasoned rice. From classic California rolls to inventive specialty creations, every piece is a harmony of flavors and textures, complemented by a delicate touch of wasabi and pickled ginger. The platter is artfully arranged to celebrate the beauty of the ocean’s bounty, making it perfect for sharing or savoring solo. Dive into this delightful experience and let your taste buds be serenaded by the fresh, exquisite flavors of the sea!",
        url: {
            small:sushiSmall,
            medium: sushiMedium
        }
    }
]