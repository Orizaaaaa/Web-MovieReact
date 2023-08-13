import axios from "axios";

export const getMovie = (callback) => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=dfe4412d30f120b43153186b0aa24994')
        .then((res) => {
            callback(res.data)

        }).catch((err) => {
            console.log(err);
        })

}