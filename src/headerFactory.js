import Utils from "./Utils"
export default function Header() {
    const headerElement = Utils.createComponent('header');

    const brandLogo = Utils.createComponent('h1');
    brandLogo.textContent = "Nana's Kitchen !"
    Utils.addStyle(brandLogo, 'logo');

    headerElement.appendChild(brandLogo);
    // headerElement.appendChild(navComponent());
    
    return {
        headerElement
    }
}