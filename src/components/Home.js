import React from 'react'
import { observer } from 'mobx-react-lite';
import Banner from './Banner';
// import MoreMovies from "./MoreMovies"


const Home = () => {



    return (
        <section className="home">
            <main className="container-lg movie-options bg-$cyan-300">
                <Banner />
                {/* <MoreMovies /> */}
            </main>
            <div className="about">
                <h1>
                    All your favortites!
                </h1>
                
            </div>
            
        </section>
    )
}

export default observer(Home)
