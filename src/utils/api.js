import axios from 'axios';


const API_KEY = "d6i0wruU7ddayTqrhwszluW0i9aNBlb1";

//Api Routes
module.exports = {
  sadSongs: () => axios.get(`http://api.soundcloud.com/tracks?bpm[from]=50&bpm[to]=85&limit=5&client_id=${API_KEY}`),
  happySongs: () => axios.get(`http://api.soundcloud.com/tracks?bpm[from]=110&bpm[to]=130&limit=5&client_id=${API_KEY}`),
  angrySongs: () => axios.get(`http://api.soundcloud.com/tracks?bpm[from]=140&bpm[to]=300&limit=5&client_id=${API_KEY}`)

}