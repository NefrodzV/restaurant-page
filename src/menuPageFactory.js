export default function menuPageFactory() {

    const STYLE = 'menu';
    const menuPageElement = document.createElement('div');
    menuPageElement.textContent = 'Menu page is loaded!!!';



    return {
        menuPageElement,
        STYLE
    }
}