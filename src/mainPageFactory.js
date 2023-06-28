
import Utils from "./Utils";
import homePageFactory from "./homePageFactory";
import menuPageFactory from "./menuPageFactory";

export default function mainPageFactory() {

    const home = homePageFactory();
    const menuPage = menuPageFactory();

    const mainPageElement = home.homePageElement;
    
    

    const updateMainPage = (clickedNavItem) => {
        switch (clickedNavItem) {
            case 'Home':
                    mainPageElement.append(home.homeElement);
                    Utils.addStyle(main, 'home');
                break;
            case 'Menu':
                mainPageElement.appendChild(menuPage.menuPageElement);
        
            default:
                console.log('Updating page bug');
                break;
        }
    }


    return {
        mainPageElement
    }

    
}