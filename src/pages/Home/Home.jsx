import {Carousel, Container} from "react-bootstrap";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Chefs from "../../components/Chefs/Chefs";
import Deals from "../../components/Marquee/Deals";
import OpenHour from "../OpenHour/OpenHour";



const Home = () => {

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/mTJ2FCT/2.png"
                        alt="First slide"
                    />
                    <Carousel.Caption className="top">
                        <h3>Welcome to The Chefs Cafe</h3>
                        <p>The Best Italian Cuisine store in your area...</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/sQkfRNX/1.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Modern Food</h3>
                        <p>Healthy food rich in vitamins and nutrients</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Jp4z0m8/3.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Best Fast Food</h3>
                        <p>
                            Enjoy your favorite food and get a limited-time discount only at our restaurant.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container className="my-4">
                <OpenHour></OpenHour>
                <Chefs></Chefs>
            </Container>
            <Deals></Deals>
        </div>
    );
};

export default Home;