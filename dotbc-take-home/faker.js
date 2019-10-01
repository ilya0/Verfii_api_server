var faker = require('faker');

//this is used for creating fake data

function gererateArtists(){
    var artist = []
    var id = faker.id.id();
    var name = faker.name.name();
    var spotifyId = faker.id.spotifyId();
    var generes = "bass music";

artist.push({
    "id":id,
    "name": name,
    "spotifyId": spotifyId,
    "generes":generes
})



return { "employees": employees }

}

module.exports = generateArtists





// {
//     "id": "111123",
//     "name": "Lil Silva",
//     "spotifyId": "2Kv0ApBohrL213X9avMrEn",
//     "genres": [
//         "bass music",
//         "future garage",
//         "uk funky",
//         "vogue"
//     ]
// },