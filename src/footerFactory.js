import Utils from "./Utils";
export default function footerFactory() {
    const footerElement = Utils.createComponent('footer');

    const footerText = Utils.createComponent('h6');
    footerText.textContent = "Created by ";

    const footerAnchor = Utils.createComponent('a');
    footerAnchor.textContent = "Nfrodzv";
    footerAnchor.href = 'https://github.com/NefrodzV/restaurant-page';

    footerText.appendChild(footerAnchor);
    footerElement.appendChild(footerText);

    return {
        footerElement
    }
}