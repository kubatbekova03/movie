import "./App.scss"
import React, {useState} from "react";
import Header from "./components/Header";
import Contact from "./page/contacts/Contact";
import AboutMe from "./page/aboutme/AboutMe";
import Home from "./page/Home/Home";
import {Route, Routes} from "react-router-dom";
import MovieCard from "./components/MovieCard";
import DetailPage from "./page/DetailPage";
import DetailActors from "./page/DetailActors";
import SearchResult from "./page/SearchResult";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/popular-films'} element={<Contact/>}/>
                <Route path={'/about'} element={<AboutMe/>}/>
                <Route path={'/movie/movie-page/:movieId'} element={<DetailPage/>}/>
                <Route path={'/movies/credits-cast/:castId'} element={<DetailActors/>}/>
                <Route path={'/movies/search-result/:movieName'} element={<SearchResult/>}/>
            </Routes>
        </div>
    )
}

export default App


