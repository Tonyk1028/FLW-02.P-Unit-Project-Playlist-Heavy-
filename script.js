// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let songImages = document.querySelector(".image");
let songNames = document.querySelector(".song-name");
let songArtists = document.querySelector(".artist");
let songLinks = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
//let songImage = ["https://i.scdn.co/image/ab67616d0000b273c4a4a8f9190656455b6bf8c3", "https://i.ytimg.com/vi/N3472Q6kvg0/maxresdefault.jpg", "https://i1.sndcdn.com/artworks-0PxvzqyLGoWS2p0w-uFIOSA-t500x500.jpg"];
// let songNames = ["bury the light", "rules of nature", "rage beaneath the mountains"];
//  let songArtist = ["Casey Edwards", "Jamie Christopherson", "Hoyo-mix" ];
//  let songLinks = [ "https://www.youtube.com/watch?v=Jrg9KxGNeJY",
//                  "https://www.youtube.com/watch?v=N3472Q6kvg0",
//                  "https://www.youtube.com/watch?v=tIq41I2WT70"];
                   




//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
let song1 = {
  songImage: "https://i.scdn.co/image/ab67616d0000b273c4a4a8f9190656455b6bf8c3",
  songNames: "bury the light",
  songArtists: "Casey Edwards",
  songLinks: "https://www.youtube.com/watch?v=Jrg9KxGNeJY"
};

let song2 = {
  songImage: "https://i.ytimg.com/vi/N3472Q6kvg0/maxresdefault.jpg",
  songNames: "rules of nature",
  songArtists: "Jamie Christopherson",
  songLinks: "https://www.youtube.com/watch?v=N3472Q6kvg0"
};

let song3 = {
  songImage: "https://i1.sndcdn.com/artworks-0PxvzqyLGoWS2p0w-uFIOSA-t500x500.jpg",
  songNames: "rage beaneath the mountains",
  songArtists: "Hoyo-mix",
  songLinks: "https://www.youtube.com/watch?v=tIq41I2WT70"
};

// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.
let songList = [song1,song2,song3];


//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
let songListInput = {
songImage: songImages.value,
songNames: songNames.value,
songArtists: songArtists.value,
songLinks: songLinks.value,
};
  
// task 10: use `.push()` to add each input value to the correct array.

songList.push(songListInput);
}





/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.

//   for (let i = 0; i < songImage.length; i++) {
// displayImage.insertAdjacentHTML("beforeend", `<img src=${songImage[i]}>`);
// }
// for (let i = 0; i < songNames.length; i++) {
// displaySong.insertAdjacentHTML("beforeend", `<p>${songNames[i]}</p>`);
// }
// for (let i = 0; i < songArtist.length; i++) {
// displayArtist.insertAdjacentHTML("beforeend", `<p>${songArtist[i]}</p>`);
// }
// for (let i = 0; i < songLinks.length; i++) {
// displayLink.insertAdjacentHTML("beforeend", `<p>${songLinks[i]}</p>`);
// }
  for (let i = 0; i < songList.length; i++){
    displayImage.insertAdjacentHTML("beforeend", `<img src=${songList[i].songImage}>`);

    displaySong.insertAdjacentHTML("beforeend", `<p>${songList[i].songNames}</p>`);

    displayArtist.insertAdjacentHTML("beforeend", `<p>${songList[i].songArtists}</p>`);

    displayLink.insertAdjacentHTML("beforeend", `<p><a href="${songList[i].songlinks}">Song Here!</a></p>`);
    }
  }



// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
