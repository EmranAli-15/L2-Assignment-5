import Banner from "./components/Banner";
import Facilities from "./components/Facilities";
import HowItWorks from "./components/HowItWorks";
import Testimonial from "./components/Testimonial";

export default function Landing() {
    return (
        <div>
            <Banner></Banner>
            <Facilities></Facilities>
            <HowItWorks></HowItWorks>
            <Testimonial></Testimonial>
        </div>
    );
}
