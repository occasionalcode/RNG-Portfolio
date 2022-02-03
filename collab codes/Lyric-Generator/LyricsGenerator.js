document.getElementById("search-btn").addEventListener("click", Fetch);

function Fetch() {
  // fetch("https://api.lyrics.ovh/v1/Playboi Carti/Meh/");
  let songTitle = document.getElementById("song-user").value;
  let artistName = document.getElementById("artist-user").value;
  document.getElementById("result-title").innerHTML = songTitle;
  fetch("https://api.lyrics.ovh/v1/" + artistName + "/" + songTitle)
    .then(function (response) {
      console.log("Helloooo");

      // if statement to catch any errors aside from 404
      if (response.status != 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      response.json().then(function (data) {
        console.log("Successful!");
        console.log(data);
        const lyrics = data.lyrics.replace(new RegExp("\n", "g"), "<br>");
        document.getElementById("lyrics-display").innerHTML = lyrics;
      });
    })
    .catch(function (err) {
      console.log(err + "404");
    });
}
