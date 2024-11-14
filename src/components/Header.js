import { createElement } from "../utils.js";
import FusionFlavorLogo from "./FusionFlavorLogo.js";
import HamburgerButton from "./HamburgerButton.js";
import  Navigation  from "./Navigation.js";

export default function Header() {
    const header = createElement('header')
    const logo = createElement('div', 'logo')
    const fusionFlavorLogo = FusionFlavorLogo()
    const spanLogo = createElement('span')
    spanLogo.textContent = 'Fusion Flavor'
    logo.append(fusionFlavorLogo, spanLogo)
    const navigation = Navigation()
    const hamburgerButton = HamburgerButton(null, (isOpen) => {
        if(isOpen) {
            header.classList.add('expand')
        } else {
            header.classList.remove('expand')
        }
    })
    window.addEventListener('resize', () => {
        if(!window.matchMedia('(max-width:600px)').matches) {
            hamburgerButton.setAttribute('data-open', 'false');
            hamburgerButton.setAttribute('aria-expanded', 'false')
            hamburgerButton.setAttribute('aria-label', 'Open navigation')
            header.classList.remove('expand')
        }
    })
    header.append(logo, hamburgerButton, navigation)

    return header
}