import Utils from "./Utils"
import navigationFactory from "./navigationFactory";
export default function headerFactory() {
    const headerElement = Utils.createComponent('header');

    const navigation = navigationFactory();
    const navElement = navigation.navElement;

    const brandLogo = Utils.createComponent('h1');
    brandLogo.textContent = "Nana's Kitchen !"
    Utils.addStyle(brandLogo, 'logo');

    headerElement.appendChild(brandLogo);
    headerElement.appendChild(navElement);
    
    // const getNavComponent = () => {
    //     return navigation;
    // }

    return {
        headerElement,
        getNavComponent() {
            return navigation;
        }
    }
}