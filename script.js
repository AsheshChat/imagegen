const form = document.querySelector('form');
const imageContainer = document.getElementById('image-container');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const imageType = form.elements['image-type'].value;
  const imageUrl = getImageUrl(imageType);
  
  const image = new Image();
  image.src = imageUrl;
  image.alt = imageType;
  
  imageContainer.innerHTML = '';
  imageContainer.appendChild(image);
});

function getImageUrl(imageType) {
  let baseUrl = '';
  
  switch (imageType) {
    case 'abstract':
      baseUrl = 'https://source.unsplash.com/featured/?abstract';
      break;
    case 'landscape':
      baseUrl = 'https://source.unsplash.com/featured/?landscape';
      break;
    case 'animals':
      baseUrl = 'https://source.unsplash.com/featured/?animals';
      break;
    case 'food':
      baseUrl = 'https://source.unsplash.com/featured/?food';
      break;
  }
  
  return `${baseUrl}&${Date.now()}`;
}
