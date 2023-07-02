
import foodMenuFactory from "./foodMenu";

export default function menuPageFactory() {

    const STYLE = 'menu';
    const menuPageElement = document.createElement('div');
    menuPageElement.classList.add('food-container');
    menuPageElement.classList.add('corners');

    const foodMenu = foodMenuFactory().getFoods();
    console.log(foodMenu);

    for(let i = 0; i < foodMenu.length;i++) {
        let foodItem = foodMenu[i];
        
        menuPageElement.appendChild(foodItem.element);
    }

    return {
        menuPageElement,
        STYLE
    }
}