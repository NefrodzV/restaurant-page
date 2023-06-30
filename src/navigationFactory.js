import navigationItemFactory from "./navigationItemFactory";
import Utils from "./Utils";
export default function navigationFactory() {

    const navElement = Utils.createComponent('nav');

    const homeItem = navigationItemFactory('Home');
    homeItem.toggleActive();
    const menuItem = navigationItemFactory('Menu');
    const contactItem = navigationItemFactory('Contact');

    const navItems = [];
    navItems.push(homeItem);
    navItems.push(menuItem);
    navItems.push(contactItem);
    
    for (let i = 0; i < navItems.length; i++) {
        let navigationItem = navItems[i];
        navElement.appendChild(navigationItem.navItemComponent);
    }

    const disableNavItemsActive = () => {
        for(let i = 0; i < navItems.length; i++) {
            let navItem = navItems[i];
            navItem.disableActive();
        }
    }

    return {
        navElement,
        getItems() {
            return navItems;
        },
        disableNavItemsActive
    }
}





