
import Utils from "./Utils";
import homePageFactory from "./homePageFactory";
import menuPageFactory from "./menuPageFactory";

export default function mainPageFactory() {

    const home = homePageFactory();
    const menuPage = menuPageFactory();

    const mainPageElement = document.createElement('main');
    mainPageElement.append(home.content);
    mainPageElement.append(home.image)
    Utils.addStyle(mainPageElement, home.STYLE);
           
    
    const updateMainPage = (clickedNavItem) => {
        switch (clickedNavItem) {
            case 'Home':
                removeChildren();
                mainPageElement.append(home.content);
                mainPageElement.append(home.image)
                Utils.addStyle(mainPageElement, home.STYLE);
            break;
            case 'Menu':
                removeChildren();
                mainPageElement.append(menuPage.menuPageElement)
            break;

            default:
                console.log('Updating page bug');
                break;
        }
    }

    const removeChildren = () => {
        while(mainPageElement.firstChild) {
            mainPageElement.removeChild(
                mainPageElement.firstChild);
        }
    }


    return {
        mainPageElement,
        updateMainPage
    }

    
}