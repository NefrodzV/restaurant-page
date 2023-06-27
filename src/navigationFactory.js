import navigationItemFactory from "./navigationItemFactory";
import Utils from "./Utils";
export default function navigationFactory() {

    const navElement = Utils.createComponent('nav');

    const homeItem = navigationItemFactory('Home');
    const menuItem = navigationItemFactory('Menu');
    const contactItem = navigationItemFactory('Contact');

    const navItems = [];
    navItems.push(homeItem);
    navItems.push(menuItem);
    navItems.push(contactItem);

    for (let i = 0; i < navItems.length; i++) {
        let navigationItem = navItems[i];
        let anchor = Utils.createComponent('a');
        Utils.addStyle(anchor, 'navItem')
        anchor.textContent = navigationItem.title;
        anchor.href = `#`;
        navElement.appendChild(anchor);
    }

    // console.log(navItems);

    return {
        navElement
    }
}





