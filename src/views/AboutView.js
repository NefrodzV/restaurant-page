import FusionFlavorLogo from "../components/FusionFlavorLogo.js";
import { createElement } from "../utils.js";

export default function AboutView() {
    const section = createElement('section', 'about')
    const title = createElement('h1')
    title.textContent = 'About Fusion Flavor'

    const aboutUsArticle = createElement('article', 'details')
    const logo = FusionFlavorLogo()
    const aboutUsDiv = createElement('div')
    const aboutUsTitle = createElement('h2', 'title')
    aboutUsTitle.textContent = 'About Us'
    const aboutUsParagraph = "At Fusion Flavor, we’re more than just a restaurant – we’re a culinary destination that brings together the best of global cuisines with a creative twist. Our philosophy is simple: great food tells a story, and we want every dish to transport you to a new place and time. Our team of chefs is dedicated to pushing the boundaries of traditional cooking, blending flavors, textures, and techniques from different cultures to craft an experience that’s as exciting as it is delicious. Whether it’s an unexpected pairing or a fresh take on a classic favorite, Fusion Flavor is all about reimagining the way we experience food. We believe that every meal should be an adventure. From the bold spices of Southeast Asia to the comforting flavors of Mediterranean cuisine, our menu is a vibrant fusion of the world’s most beloved culinary traditions. We’re committed to using only the freshest, locally-sourced ingredients to bring these global flavors to life."
    aboutUsDiv.append(aboutUsTitle, aboutUsParagraph)
    aboutUsArticle.append(aboutUsDiv, logo)

    // Working hours article

    section.append(title, aboutUsArticle)
    return section
}