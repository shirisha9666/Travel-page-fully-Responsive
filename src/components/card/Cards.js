import React from 'react'
import Card from '@mui/material/Card';
import "./card.css"
import CardMedia from '@mui/material/CardMedia';
import CardsItem from './CardsItem';
import img_1 from "../images/img-2.jpg"
import img_2 from "../images/img-4.jpg";
import img_3 from "../images/img-3.jpg";
import img_4 from "../images/img-5.jpg";

import img_5 from "../images/img-9.jpg";
import img_8 from "../images/img-8.jpg";
import { Box } from '@mui/material';



const Cards = () => {
    return (
        <section className='card_section'>
            <ul style={{ width: "100%", }}>
                <Box sx={{
                    display: "flex", justifyContent: "center",
                    paddingTop: "10px", flexWrap: "wrap",

                }}>

                    <CardMedia sx={{
                        margin: { xs: "10px" }, width: "450px",

                    }}>
                        <CardsItem image={img_1} text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery' />
                    </CardMedia>
                    <CardMedia sx={{ width: "450px", margin: { xs: "10px" } }}>
                        <CardsItem image={img_3} text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury' />
                    </CardMedia>

                </Box>
            </ul>
            <ul className='ul_secound' style={{ width: "100%", }}>
                <Card sx={{
                    display: "flex",
                    justifyContent: "center",

                    flexWrap: "wrap"
                }}>

                    <CardMedia sx={{ width: "300px", margin: { xs: "10px" } }} >
                        <CardsItem image={img_2} label="Adventure" text="Explore the hidden
                    waterfall deep inside the Amazon jungle" />
                    </CardMedia>
                    <CardMedia sx={{ width: "300px", margin: { xs: "10px" } }}>
                        <CardsItem image={img_5} label="Adventure" text="Explore the hidden
                    waterfall deep inside the Amazon jungle" />
                    </CardMedia>
                    <CardMedia sx={{ width: "300px", margin: { xs: "10px" } }}>
                        <CardsItem image={img_8} text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline' />
                    </CardMedia>

                </Card>

            </ul>
        </section >
    )
}

export default Cards