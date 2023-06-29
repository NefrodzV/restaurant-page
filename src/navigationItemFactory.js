import Utils from "./Utils";

export default function navigationItemFactory(title) {

    const anchor = document.createElement('a');
    Utils.addStyle(anchor, 'navItem');
    anchor.textContent = title;

    const toggleActive = () => {
        anchor.toggleAttribute('active');
    }

    const disableActive = () => {
        anchor.removeAttribute('active');
    }
    
    return {
        navItemComponent: anchor,
        toggleActive,
        disableActive
    }
}