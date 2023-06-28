import Utils from "./Utils";

export default function navigationItemFactory(title) {

    const anchor = document.createElement('a');
    Utils.addStyle(anchor, 'navItem');
    anchor.textContent = title;
    
    return {
        navItemComponent: anchor
    }
}