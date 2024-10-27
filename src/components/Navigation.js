import { createElement } from "../utils.js";

export default function Navigation(onItemClick) {
    const nav = createElement('nav')
    
    const homeItem = createElement('a','navItem')
    homeItem.textContent = 'home'
    homeItem.href = "/"
    const menuItem = createElement('a', 'navItem')
    menuItem.textContent = 'menu'
    menuItem.href = "menu"
    const aboutItem = createElement('a', 'navItem')
    aboutItem.textContent = 'about'

    homeItem.addEventListener('click',onItemClick)
    menuItem.addEventListener('click',onItemClick)
    aboutItem.addEventListener('click',onItemClick)

    nav.append(homeItem, menuItem, aboutItem)
    return nav
}