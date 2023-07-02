export default function foodFactory(foodName, imgSrc, author, link) {

    

    const element = document.createElement('div');
    element.textContent = foodName;
    element.classList.add('card');
    element.classList.add('corners');
    element.classList.add('box-shadow');

    const image = new Image();
    image.src = imgSrc;

    const foodImageContainer = document.createElement('div');
    foodImageContainer.classList.add('food-img-container');
    
    foodImageContainer.append(image);

    element.appendChild(foodImageContainer);
    
    

    const anchorUnsplash = document.createElement('a');
    anchorUnsplash.textContent = 'https://unsplash.com/';
    const anchorAuthor = document.createElement('a');
    anchorAuthor.textContent = author;
    anchorAuthor.href = link;

    
    const creditPara = document.createElement('p');
    creditPara.textContent = `Photo by ${anchorAuthor} on ${anchorUnsplash}`;

    image.appendChild(creditPara);
    
    return {
        element
    }
}