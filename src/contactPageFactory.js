import Utils from "./Utils";

export default  function contactPageFactory() {

    const STYLE = 'contact';
    const contactElement = document.createElement('div');
    contactElement.textContent  = 'Contact page uploaded'
    Utils.addStyle(contactElement, 'contact');

    return {
        contactElement
    }

}