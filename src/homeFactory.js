import backgroundImage from './images/home-background.jpg';
import Utils from "./Utils";

export default function homeFactory() {

    const mainElement = Utils.createComponent('main');
    Utils.addStyle(mainElement, 'home');
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

    mainElement.appendChild(content);
    Utils.addImage(mainElement, backgroundImage);

    return {
        mainElement
    }
}
