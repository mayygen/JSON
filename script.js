let rankingListElement = document.getElementById('rankingList');

let jsonDatabase = [

  {
    "ranking" : "Rank: #1",
    "albumTitle" : "I Think You Think Too Much of Me" ,
    "picture_url" : "https://upload.wikimedia.org/wikipedia/en/b/b6/I_Think_You_Think_Too_Much_Of_Me_Album_Cover%2C_July_2016.jpg",
    "releaseDate" : "19 August 2016",
  },

  {
    "ranking" : "Rank: #2",
    "albumTitle" : "End Credits" ,
    "picture_url" : "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/End_Credits_by_EDEN-Official%2CDecember2015.jpg/220px-End_Credits_by_EDEN-Official%2CDecember2015.jpg",
    "releaseDate" : "8 August 2015",
  },

  {
    "ranking" : "Rank: #3",
    "albumTitle" : "Vertigo" ,
    "picture_url" : "https://images-ext-1.discordapp.net/external/OuJx0p8TI4QpJPSgQNBdTlyXxFLHgeYsc_vs0snKsuE/https/upload.wikimedia.org/wikipedia/en/thumb/3/3f/Vertigo_EDEN_Album_Cover.png/220px-Vertigo_EDEN_Album_Cover.png",
    "releaseDate" : "19 January 2018",
  },

  {
    "ranking" : "Rank: #4",
    "albumTitle" : "No Future" ,
    "picture_url" : "https://images-ext-1.discordapp.net/external/2XLuZxEfRuRp81uQHRFCHZHhOvdS6c8g243FmBqbc9w/https/upload.wikimedia.org/wikipedia/en/thumb/9/9d/No_Future_Eden_Album_Cover.jpeg/220px-No_Future_Eden_Album_Cover.jpeg",
    "releaseDate" : "14 February 2020",
  },

  {
    "ranking" : "Rank: #5",
    "albumTitle" : "ICYMI" ,
    "picture_url" : "https://images-ext-2.discordapp.net/external/LVeKkEuw1njI4dnM_9nBy3gXxheOC93B96c2hPF1xWw/https/i.scdn.co/image/ab67616d0000b2730cffe2d0b92e5fa76c36913d",
    "releaseDate" : "9 September 2022",
  },

];

for (var i = 0; i < jsonDatabase.length; i++) {
   createElementProper(jsonDatabase[i]);
}

function createElementProper(incomingJSON){

  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');

  let newContentRanking = document.createElement("H2");
  newContentRanking.classList.add('contentRanking');
  newContentRanking.innerText = incomingJSON['ranking'];
  newContentElement.appendChild(newContentRanking);

  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['albumTitle'];
  newContentElement.appendChild(newContentHeading);

  let newImage = document.createElement("IMG");
  newImage.classList.add("albumImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  let newContentDate = document.createElement("H4");
  newContentDate.classList.add('contentDate');
  newContentDate.innerText = incomingJSON['releaseDate'];
  newContentElement.appendChild(newContentDate);

  rankingListElement.appendChild(newContentElement);

}
