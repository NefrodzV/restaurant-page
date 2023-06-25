import NavItemFactory from "./NavItemFactory";
function NavMenuFactory() {
    
    const homeItem = NavItemFactory('Home');
    const menuItem = NavItemFactory('Menu');
    const contactItem = NavItemFactory('Contact');

    const navItems = [];
    navItems.push(homeItem);
    navItems.push(menuItem);
    navItems.push(contactItem);

    // console.log(navItems);

    return {
        navItems
    }
}


const navMenu = NavMenuFactory()

export default navMenu;



