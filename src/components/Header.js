import { createElement } from "../utils.js";
import HamburgerButton from "./HamburgerButton.js";
import  Navigation  from "./Navigation.js";

export default function Header(onNavItemClick) {
    const header = createElement('header')
    const logo = createElement('div', 'logo')
    logo.textContent = 'Logo section'
    const navigation = Navigation(onNavItemClick)
    const hamburgerButton = HamburgerButton(null, (isOpen) => {
        if(isOpen) {
            header.classList.add('expand')
        } else {
            header.classList.remove('expand')
        }
    })
    header.append(logo, hamburgerButton, navigation)

    return header
}