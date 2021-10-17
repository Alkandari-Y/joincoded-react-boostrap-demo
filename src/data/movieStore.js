import { makeObservable, observable, action } from "mobx";
import data from "./moviesdata"

class MovieStore{
    movies = data;
    loadingStatus = true;
    bannerSelected = [];
    

    constructor(){
        makeObservable(this, {
            movies: observable,
            loadingStatus: observable,
            bannerSelected: observable,
            changeLoading: action,
            getStatus: action,
            addRandomBanner: action,
        })

    }

    changeLoading = () => {
        this.loadingStatus ? this.loadingStatus = false : this.loadingStatus=true
    };
    
    getStatus = () => {console.log(this.loadingStatus)};

    addRandomBanner = () => {
        const bannerNumber = 3;
        for (let i = 0; i < bannerNumber; i++){
            const randomIndex = Math.floor(Math.random() * this.movies.length)
            const randomMovie = this.movies[randomIndex]
            this.bannerSelected.push(randomMovie)
        }
    };

    
   

    


};


const moviesData = new MovieStore();
// moviesData.loadingStatus && setTimeout(()=>{moviesData.changeLoading()}, 1000)
setTimeout(()=> {
    moviesData.loadingStatus = false
},900)
export default moviesData;