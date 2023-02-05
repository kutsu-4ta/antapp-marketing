import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Container} from "@mui/material";
import {styled} from "@mui/material/styles";


const productDocuments = [
    {
        'name': 'セミナー1',
        'url' : '/'
    },
    {
        'name': 'セミナー2',
        'url' : '/'
    },
    {   'name': 'セミナー3',
        'url' : '/'
    },
    {   'name': 'セミナー4',
        'url' : '/'
    },
    {   'name': 'セミナー5',
        'url' : '/'
    }
];


const ProductPaperTile = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 200,
    width: 200,
}));

export const EmblaCarousel = () => {
    const [emblaRef] = useEmblaCarousel()

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container"
                 style={{width: 'auto',}}>
                {productDocuments.map((productDocuments) => (
                            <div className="embla__slide" key={productDocuments.name}>
                    <Grid
                        item xs={4}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                        sx={{
                            marginTop: 0,
                            marginBottom: 0
                        }}
                    >
                        <ProductPaperTile className={"btn"}>
                            <a href={productDocuments.url}>
                                <Paper
                                    sx={{border: 'solid',
                                        borderColor: 'white',
                                        padding: 0,
                                        margin:4,
                                        height:'maxContent',
                                        boxShadow: 'none'
                                    }}>
                                    {productDocuments.name}
                                </Paper>
                            </a>
                        </ProductPaperTile>
                    </Grid>
                            </div>
                ))}
            </div>
        </div>

    )
}