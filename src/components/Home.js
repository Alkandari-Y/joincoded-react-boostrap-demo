import React from 'react'

import { observer } from 'mobx-react-lite';
import Banner from './Banner';
const Home = () => {



    return (
        <section>
            <main className="container-lg">
                <Banner />
            </main>
            
        </section>
    )
}

export default observer(Home)
