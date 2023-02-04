import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

type metaTags = {
    title: string;
    description: string;
    path: string;
};

const HeaderBlock = (props: metaTags) => {
    // const { title, description, path } = props;
    // console.log(props);
    return (
        <HelmetProvider>
            <Helmet>
                <title>{props.title}</title>
                <meta name="description" content={props.description}/>
                <link rel="canonical" href={`https:hoge.com/${props.path}`}/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Helmet>
        </HelmetProvider>
    );
};

export default HeaderBlock;