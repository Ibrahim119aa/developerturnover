import { lazy, memo } from "react"
const Hero = memo(lazy(() => import("@/components/Hero")));
const AboutTheBookBody = memo(lazy(() => import("@/components/AboutTheBookBody")));

const AboutTheBook = () => {
    return (
        <div>
            <Hero title={"About The Book"} />
            <AboutTheBookBody />
        </div>
    )
}
export default memo(AboutTheBook);
