import React, { lazy } from 'react';

const Hero = lazy(() => import("@/components/Hero"));
const AuthorBody = lazy(() => import("@/components/AuthorBody"));



const Home = () => {
  return (
    <div>

      <Hero title={"About The Author"} />
      <AuthorBody />

    </div>
  )
}

export default React.memo(Home);