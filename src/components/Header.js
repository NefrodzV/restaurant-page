import { createElement } from "../utils.js";
import  Navigation  from "./Navigation.js";

export default function Header(onNavItemClick) {
    const header = createElement('header')
    const logo = createElement('div', 'logo')
    logo.textContent = 'Logo section'

    const navigation = Navigation(onNavItemClick)
    header.append(logo, navigation)
    return header
}