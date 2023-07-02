import foodFactory from './foodFactory';
import cheeseBurgerPic from './images/amirali-mirhashemian-cheese-burger.jpg'
import eggBurgerPic from './images/chad-montano-egg-burger.jpg'
import pancakesPic from './images/chad-montano-pancakes.jpg';
import onionBurgerPic from './images/eaters-collective-onion-burger.jpg';
import smoothiePic  from './images/emile-mbunzama-smoothie.jpg';
import rosemaryPizzaPic from './images/ivan-torres-pizza.jpg';
import frenchToastPic from './images/joseph-gonzalez-french-toast.jpg';
import ramenPic from './images/michele-blackwell-ramen.jpg';


export default function foodMenuFactory() {

    const foods = [];

    const cheeseBurger = foodFactory('Cheese Burger', cheeseBurgerPic, 'Amirali Mirhashemain', '#');
    foods.push(cheeseBurger);

    const eggBurger= foodFactory('Egg Burger', eggBurgerPic, 'Chad Montano', '#');
    foods.push(eggBurger);

    const pancakes = foodFactory('Pancakes', pancakesPic, 'Chad Montano', '#');
    foods.push(pancakes);

    const onionBurger = foodFactory('Onion Burger', onionBurgerPic, 'Eaters Collective', '#');
    foods.push(onionBurger);

    const smoothie = foodFactory('Smoothie', smoothiePic, 'Emile Mbunzama', '#');
    foods.push(smoothie);

    const rosemaryPizza = foodFactory('Rosemary Pizza', rosemaryPizzaPic, 'Ivan Torres', '#');
    foods.push(rosemaryPizza);

    const frenchToast = foodFactory("French Toast", frenchToastPic, 'Joseph Gonzales', '#');
    foods.push(frenchToast);

    const ramen = foodFactory('Ramen', ramenPic, 'Michelle BlackWell', "#");
    foods.push(ramen);

    return {
        getFoods(){
            return foods;
        }
    }
}