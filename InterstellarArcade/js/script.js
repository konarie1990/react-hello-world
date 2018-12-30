"use strict";

AOS.init();

$(document).ready(function() {
  //Set up global variables
  let i = 0;
  let j = 0;

  var games = {
    games: [
      [
        { title: "[Game Title 1]" },
        { description: "[Description 1]" },
        { image: "[Image 1]" }
      ],

      [
        { title: "[Game Title 2]" },
        { description: "[Description 2]" },
        { image: "[Image 2]" }
      ],

      [
        { title: "[Game Title 3]" },
        { description: "[Description 3]" },
        { image: "[Image 3]" }
      ],

      [
        { title: "[Game Title 4]" },
        { description: "[Description 4]" },
        { image: "[Image 4]" }
      ],

      [
        { title: "[Game Title 5]" },
        { description: "[Description 5]" },
        { image: "[Image 5]" }
      ]
    ]
  };

  // var games;
  // $.get('js/games.json', function(data) {
  //   games = data;
  // });
  var myJSON = JSON.stringify(games);
  localStorage.setItem("testJSON", myJSON);
  var obj = JSON.parse(localStorage.getItem("testJSON"));
  $(".games-container").empty(); //Empty Grid to start fresh

  let gamesArray = [];
  for (
    i = 0;
    i < obj.games.length;
    i++ //Go through each game object, create div with game info
  ) {
    gamesArray.push(
      '<div data-aos="zoom-in" data-aos-offset="200px" data-aos-duration="300" class="game game-' +
        (i + 1) +
        '">'
    );
    for (j = 0; j < obj.games[i].length + 1; j++) {
      switch (j) {
        case 0:
          gamesArray.push(
            '<div class="game-title">' +
              parseString(JSON.stringify(obj.games[i][j])) +
              "</div>"
          );
          break;
        case 1:
          gamesArray.push(
            '<div class="game-description">' +
              parseString(JSON.stringify(obj.games[i][j])) +
              "</div>"
          );
          break;
        case 2:
          gamesArray.push(
            '<div class="image">' +
              parseString(JSON.stringify(obj.games[i][j])) +
              "</div>"
          );
          break;
        case 3:
          gamesArray.push("</div>");
          break;
      }
    }
    $(".games-container").append(gamesArray.join(""));
  }

  function parseString(str) {
    str = str.substring(str.indexOf("[") + 1);
    str = str.substring(0, str.indexOf("]"));
    return str;
  }
});
