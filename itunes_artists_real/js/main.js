// Step 1)
function currentArtist () {
	var newArtist = $("input").val();
	console.log(newArtist);
	var newItunes = "https://itunes.apple.com/search?term=";
	var bluh = newItunes+newArtist;
	console.log(bluh);


	$.getJSON(bluh, function(responseJSON){

		for (var i = 0; i < responseJSON['results'].length; i++) {

		  var artist = responseJSON ['results'][i]['artistName'];
		  console.log(artist);

		  var track = responseJSON ['results'][i]['trackName'];
		  console.log(track);

		  var art = responseJSON ['results'][i]['artworkUrl100'];
		  console.log(art);

		  var preview = responseJSON ['results'][i]['previewUrl'];
		  console.log(preview);

		  var price = responseJSON ['results'][i]['trackPrice'];
		  console.log(price);

		  if (i === $(".song").length) {
		  	var newSong = $("<div class='song'>");
		  	var newImage = $("<img>").attr("src", art);
		  	var newTitle = $("<div>").text(track);
		  	var newArtist = $("<div class='artist_name'>").text(artist);
		  	var newPopularity = $("<div class='popularity'>").text(price);
		  	var newLink = $("<a>").attr("href", preview).text("Listen Here");

		  	var newDiv = newSong.append(newImage).append(newTitle).append(newArtist).append(newArtist).append(newPopularity).append(newLink);

		  	console.log(newDiv);

		  	$("#playlist").append(newDiv);
	  		}

	  	$(".song .artist_name").eq(i).text(artist);
		  $(".song .title").eq(i).text(track);
		  $(".song img").eq(i).attr("src", art);
		  $(".song a").eq(i).attr("href", preview);
		  $(".song .popularity").eq(i).text(price);

		}
	});

}



$("#submit-button").click(currentArtist);

// Take your previous lab solution and copy and paste it here (the Javascript only)

// Get that working. I've removed the example song so make sure your code hasn't broken because of it.
// If you didn't finish the lab, finish it up for Step 1

// Step 2)
// Delete the variable responseJSON
// now instead make an AJAX request to this url: "https://itunes.apple.com/search?term=abba"
// use the response JSON from that request to populate the page.

// Step 3)
// Now the hard part. Instead of doing a request to https://itunes.apple.com/search?term=abba
// I want you to generate the URL for the AJAX request based on the text
// inside the input element on the page.
// So if I type Journey into that input and hit submit.
// it should create the url
// https://itunes.apple.com/search?term=journey
// and do an AJAX request to that URL

// Step 4)
// We get back more songs from the API than we have!
// Use our knowledge of creating HTML in Javascript to
// show all the songs properly. The first 3 songs you can skip
// so start your loop at index = 2 instead of 0.


