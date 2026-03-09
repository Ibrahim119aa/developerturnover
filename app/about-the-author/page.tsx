import React, { lazy } from 'react';

const Hero = lazy(() => import("@/components/Hero"));
const AuthorBody = lazy(() => import("@/components/AuthorBody"));



const AboutTheAuthor = () => {
    return (
        <div>

            <Hero title={"About The Author"} />
            <AuthorBody />

        </div>
    )
}

export default React.memo(AboutTheAuthor);