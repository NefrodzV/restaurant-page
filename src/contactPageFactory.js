import Utils from "./Utils";
import locationImage from './images/location.png';

export default  function contactPageFactory() {

    const STYLE = 'contact';

    const locationContainer = document.createElement('div');
    locationContainer.classList.add('location');
    locationContainer.classList.add('box-shadow');

    const phonePara = document.createElement('p');
    phonePara.textContent = '787 - 345 - 7890';

    const directionPara = document.createElement('p');
    directionPara.textContent = 'Las Américas Ave, Ponce, 00731, Puerto Rico';
    
    locationContainer.append(directionPara);
    locationContainer.append(phonePara);
    
    const locationImg = new Image();
    locationImg.src = locationImage;
    locationImg.classList.add('border');
    locationContainer.appendChild(locationImg);
    
    

    return {
        contactElement: locationContainer,
        STYLE
    }

}