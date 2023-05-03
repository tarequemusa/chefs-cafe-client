import {Container} from "react-bootstrap";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Chefs from "../../components/Chefs/Chefs";
import Deals from "../../components/Marquee/Deals";



const Home = () => {

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <div>
            <div>
                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={1000}
                >
                    <div data-src="https://i.ibb.co/1GkkyMB/Black-and-Orange-Restaurant-Menu-Facebook-Cover-3.png" />
                    <div data-src="https://i.ibb.co/WxzjKLL/Yellow-Green-Food-Facebook-Cover-1.png" />
                    <div data-src="https://i.ibb.co/jLTdk3P/Yellow-Modern-Minimalist-Pizza-Food-Promotion-Instagram-Post-1.png" />
                </AutoplaySlider>
            </div>
            <Container className="my-4">

                <h2>This is Home</h2>
                <Chefs></Chefs>
            </Container>
            <Deals></Deals>
        </div>
    );
};

export default Home;