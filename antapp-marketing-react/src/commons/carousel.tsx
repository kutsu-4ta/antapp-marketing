import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Container} from "@mui/material";

export const EmblaCarousel = () => {
    const [emblaRef] = useEmblaCarousel()

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <Paper sx={{border: 'solid', borderColor: 'white', padding: 0, margin:4, height:'maxContent', }}>
                            content1
                    </Paper>
                </div>
                <div className="embla__slide">
                    <Paper sx={{border: 'solid', borderColor: 'white', padding: 0, margin: 4}}>
                        content2
                    </Paper>
                </div>
                <div className="embla__slide">
                    <Paper sx={{border: 'solid', borderColor: 'white', padding: 0, margin: 4}}>
                        content3
                    </Paper>
                </div>
            </div>
        </div>

    )
}