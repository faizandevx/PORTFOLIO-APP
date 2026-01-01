import 'aos/dist/aos.css';
import LatestService from "./LatestService";
import LatestPortfolio from "./LatestPortfolio";
import EducationExperience from "./EducationExperience";
import Hero from "./Hero";
import About from "./About";

function MainPage() {
    return (
        <>
            <Hero />
            <About />
            <LatestService />
            <EducationExperience />
        </>
    );
}

export default MainPage;
