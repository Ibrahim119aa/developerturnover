import React, { lazy } from 'react';

const HomeHero = lazy(() => import("@/components/HomePageHero"));
const AboutAuthor = lazy(() => import("@/components/AboutAuthor"));
const HomePageAboutTheAuthor = lazy(() => import("@/components/HomePageAboutTheAuthor"));
const HomePageContactUs = lazy(() => import("@/components/HomePageContactUs"));




const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomePageAboutTheAuthor />
      <AboutAuthor />
      <HomePageContactUs />

    </div>
  )
}

export default React.memo(Home);