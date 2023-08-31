import axios from "axios";

export const getDetailMovie = (id, callback) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=dfe4412d30f120b43153186b0aa24994`)
        .then((res) => {
            callback(res.data)
        }).catch((err) => {
            console.log(err);
        })
}


// https://api.themoviedb.org/3/person/976?api_key=dfe4412d30f120b43153186b0aa24994
