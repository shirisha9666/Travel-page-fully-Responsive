import React from 'react'
import Card from '@mui/material/Card';
import "./card.css"
import CardMedia from '@mui/material/CardMedia';
import { CardContent, Typography } from '@mui/material';

const CardsItem = (props) => {
    return (
        <div>
            <section >
                <Card className='card_container_child'>
                    <CardMedia sx={{ height: 400 }}
                        className='image_1'
                        image={props.image}

                    />
                    <CardContent>

                        <p gutterBottom variant="h5" component="div">
                            {props.label}
                        </p>
                        <h4 >
                            {props.text}
                        </h4>
                    </CardContent>

                </Card>



            </section>


        </div>
    )
}

export default CardsItem