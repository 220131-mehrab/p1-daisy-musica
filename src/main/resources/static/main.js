var welcomeMsg = 'Hello, World!'
document.querySelector('h1').innerText = welcomeMsg

fetch('/artists').then(resp => resp.json()).then(artists => {
    document.querySelector('body').innerHTML = listArtists(artists);
}
);

let listArtist = function(artist) {
return '<p>' + artist.artistId + ": " + artist.name + '</p>';
}

function listArtists(json) {
return `
    <div id="artistsList">
        ${json.map(listArtist).join('\n')}
    </div>
`
}