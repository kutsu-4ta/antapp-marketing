// import { VFC } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

type metaTags = {
    title: string;
    description: string;
    path: string;
};

export const HeaderBlock = (props: metaTags) => {
    const { title, description, path } = props;
    return (
        <HelmetProvider>
            <Helmet>
                <title>{title ?? 'デフォルトのタイトルです'}</title>
                <meta name="description" content={description ?? 'デフォルトの説明文です'}/>
                <link rel="canonical" href={`https:hoge.com/${path ?? ''}`}/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Helmet>
        </HelmetProvider>
    );
};

export default HeaderBlock;