import React from 'react'
import { Redirect, Route, Switch } from "react-router";
//Components
import Home from "./Home"
import MoviesList from "./MoviesList";
import Loading from "./Loading";
import MovieDetail from './MovieDetail';
import PageNotFound from './PageNotFound'
//Mobx + data
import moviesData from '../data/movieStore';
import {observer} from "mobx-react"


const Routes = () => {
    return (
        <>
        { moviesData.loadingStatus ? <Loading />
            :
          <Switch>
            <Route path="/movies/:movieId">
              <MovieDetail />
            </Route>
            <Route path="/movies">
              <MoviesList />
            </Route>
            <Route path="/404">
              <PageNotFound />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Redirect to="/404"/>
          </Switch>
          }
        </>
    )
}

export default observer(Routes)
