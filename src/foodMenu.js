import foodFactory from './foodFactory';
import cheeseBurgerPic from './images/amirali-mirhashemian-cheese-burger.jpg'
import eggBurgerPic from './images/chad-montano-egg-burger.jpg'
import pancakesPic from './images/chad-montano-pancakes.jpg';
import onionBurgerPic from './images/eaters-collective-onion-burger.jpg';
import smoothiePic  from './images/emile-mbunzama-smoothie.jpg';
export default function foodMenuFactory() {

    const foods = [];

    const cheeseBurger = foodFactory(cheeseBurgerPic, 'Amirali Mirhashemain', '#');
    foods.push(cheeseBurger);

    const eggBurger= foodFactory(eggBurgerPic, 'Chad Montano', '#');
    foods.push(eggBurger);

    const pancakes = foodFactory(pancakesPic, 'Chad Montano', '#');
    foods.push(pancakes);

    const onionBurger = foodFactory(onionBurgerPic, 'Eaters Collective', '#');
    foods.push(onionBurger);

    const smoothie = foodFactory(smoothiePic, 'Emile Mbunzama', '#');
    foods.push(smoothie);

    return {
        getFoods(){
            return foods;
        }
    }
}