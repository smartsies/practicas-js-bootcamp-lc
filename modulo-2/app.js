var hotels = {
  Stanley: {
    name: 'The Stanley Hotel',
    location: '333 E Wonderview Ave, Estes Park, CO',
    image: 'https://pix10.agoda.net/hotelImages/2464157/-1/262bcec4e031dfd14fd04d9f01ebc861.jpg?s=1024x768',
  },
  Timberline: {
    name: 'Timberline Lodge',
    location: '27500 E Timberline Road, Government Camp, OR',
    image: 'https://www.oregonencyclopedia.org/media/uploads/thumbnails_medium/Timberline_Lodge_ba011745.jpg',
  }
};

var stars = {
  "1":
    "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  "2":
    "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  "3":
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
  "4":
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
  "5":
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

//Preguntar y almacenar los datos que luego se mostrarán

var selectedHotel = prompt("Indique el hotel sobre el que quiere hacer la reseña: Timberline o Stanley");
var isAnonymous = confirm("¿Deseas que tu reseña sea anónima?");
var hotelRating = prompt("Puntúa el hotel Stanley del 1 al 5:");

//Mostrar los datos informativos sobre el hotel

document.getElementById('name-hotel').innerHTML = "Hotel " + hotels[selectedHotel].name;
document.getElementById('location-hotel').innerHTML = "Ubicado en " + hotels[selectedHotel].location;
document.getElementById('img-hotel').src = hotels[selectedHotel].image;

//Mostrar si la reseña es anónima

document.getElementById('anonymous').checked = isAnonymous;

//Mostrar la puntuación dada al hotel

document.getElementById('rating').innerHTML = stars[hotelRating];