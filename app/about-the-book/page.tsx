import { lazy, memo } from "react"
const Hero = memo(lazy(() => import("@/components/Hero")))

const AboutTheBook = () => {
    return (
        <div>
            <Hero title={"About The Book"} />
        </div>
    )
}
export default memo(AboutTheBook);
