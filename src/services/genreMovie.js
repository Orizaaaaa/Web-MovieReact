import axios from "axios";

export const getGenre = (callback) => {
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=dfe4412d30f120b43153186b0aa24994')
        .then((res) => {
            callback(res.data.genres)
        }).catch((err) => {
            console.log(err);
        })
}


