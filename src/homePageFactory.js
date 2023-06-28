import backgroundImage from './images/home-background.jpg';
import Utils from "./Utils";

export default function homePageFactory() {

    const STYLE = 'home';

    const content = Utils.createComponent('div');
    Utils.addStyle(content, 'content');

    const contentTitle = Utils.createComponent('h1');
    contentTitle.textContent = 'Grand Opening!';
    Utils.addStyle(contentTitle, 'title');

    // const card = Utils.createComponent('div');
    // Utils.addStyle(card, 'card');
    // Utils.addStyle(card, 'border');
    // Utils.addStyle(card, 'box-shadow');

    content.appendChild(contentTitle);
    // content.appendChild(card);

    const image = new Image();
    image.src = backgroundImage;
    
    

    return {
        content, 
        image,
        STYLE
    }
}
