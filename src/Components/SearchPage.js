import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className ='searchPage'>
            <div
                className = 'searchPage__info'>
                <p>1 stay . 10 october to 30 october . 1 guest</p>
                <h1>Stays nearby</h1>   

                <Button
                    variant ='outlined'>
                    Cancellation Flexibility
                </Button>

                <Button
                    variant ='outlined'>
                    Type of place
                </Button>

                <Button
                    variant ='outlined'>
                    Price
                </Button>

                <Button
                    variant ='outlined'>
                    Rooms and beds
                </Button>

                <Button
                    variant ='outlined'>
                    More filters
                </Button>
            </div>

            <SearchResult
                img = 'https://encrypted-tbn0.gstatic.com/image?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU'
                location = 'Private room in center of london'
                title = 'Stay at this spacious Edwardian House'
                description = '1 guest . 1 bedroom . Wifi . Kitchen . Free parking . Washing Machine'
                star = {4.73}
                price = '$30/night'
                total = '$600 total'
            />

        </div>
    )
}

export default SearchPage
