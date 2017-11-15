{
   album.songs.forEach( (song, index) => { // the foreach array method will iterate through album.songs. the arrow function represents a call back function.It will pass in two parameters.
// we create a song element. We pass it a templete literal so that we can insert data directly into the string
     song.element = $(`
       <tr>
            <td>
              <button>
                <span class="song-number">${index + 1}</span>
                <span class="ion-play"></span>
                <span class="ion-pause"></span>
              </button>
            </td>
        <td>${song.title}</td>
        <td>${song.duration}</td>
      </tr>
     `);

     song.element.on('click', event => { // this will play and pause a song.
         player.playPause(song);
     });



// this will make song number from 0 to 4 because its in array format. Do n+ 1
     $('#song-list').append(song.element);     // we must append append it to an exisiting element in the DOM. We append song.element to #song-list.
     });

 }
