{
  $('#album-title').text(album.title);
  $('img#album-cover-art').attr('src', album.albumArtUrl);
  $('.artist').text(album.artist); // select the artist class and output the text content of the album object. The album object will then select the artist key and output its value.
  $('#release-info').text(album.releaseInfo); // select the release-info id and output the text content of the album object. The album object will then select the releaseInfo key and output its value.
}
