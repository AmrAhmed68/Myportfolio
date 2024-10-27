import { Banner } from "./Banner";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer"; 
import { NavBar } from "./NavBar";


export const MainContent = () => {
    return(
        <div>
        <NavBar />
        <Banner />
        <Skills />
        <Projects/>
        <Contact />
        <Footer />
        </div>
    )
}