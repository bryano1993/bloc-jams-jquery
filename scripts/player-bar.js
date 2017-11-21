{
  $('button#play-pause').on('click', function() {// a click handler that will target the #playpause button
    player.playPause(); // and will call player.playPause. It will now play and pause song but the pause and play button will fail to show up
    $(this).attr('playState', player.playState);
  });
}

// That means that setting the playState attribute on our play/pause button will cause the icons to show/hide appropriately. We can use the jQuery
// .attr() method to set the attribute, and we can set it to the player object's playState property. Reference your analysis of the player.js file
// if you're unclear on how player manages its  playState property.

$('button#next').on('click', function(){ // we add a click handler
  if (player.playState !== 'playing') { return; }// Use player.playState to check if a song is playing, and if not, execute a return statement. The return will terminate execution of the function if the if statement's condition is met.
  const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
  const nextSongIndex = currentSongIndex + 1;
  if (nextSongIndex >= album.songs.length) { return; } // will prevent the last song from stopping when the next button is clicked.
  const nextSong = album.songs[nextSongIndex];
  player.playPause(nextSong);
});

$('button#previous').on('click', function(){
   if (player.playState !== 'playing') { return; }
   const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
   const previousSongIndex = currentSongIndex - 1;
   if (previousSongIndex >= album.songs.length) { return; }
   const previousSong = album.songs[previousSongIndex];
   player.playPause(previousSong);
 });
