import {Fragment} from "react";
import {Helmet} from "react-helmet-async";

export const Share = () => {
    return (
        <Fragment>
            <Helmet>
                <title>This is share page</title>
                <meta name="description" content="This is share page" />
                <meta property="og:image" content="http://thumbnail.10x10.co.kr/webimage/image/basic600/408/B004089332-1.jpg?cmd=thumb&w=500&h=500&fit=true&ws=false" />
            </Helmet>
            <section>
                <p> This is main Page </p>
            </section>
        </Fragment>
    )
}