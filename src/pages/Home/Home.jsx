import {Carousel, Container} from "react-bootstrap";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Chefs from "../../components/Chefs/Chefs";
import Deals from "../../components/Marquee/Deals";



const Home = () => {

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/cYvGvjm/Beige-Homemade-Goods-Vintage-Retro-Label-Design-Emblem-Logo-Template-2.png"
                        alt="First slide"
                    />
                    <Carousel.Caption className="top">
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/p1LMq5J/Beige-Homemade-Goods-Vintage-Retro-Label-Design-Emblem-Logo-Template-1.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Ch87JLs/Beige-Homemade-Goods-Vintage-Retro-Label-Design-Emblem-Logo-Template.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div>
                {/* <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={1000}
                >
                    <div data-src="https://i.ibb.co/1GkkyMB/Black-and-Orange-Restaurant-Menu-Facebook-Cover-3.png" />
                    <div data-src="https://i.ibb.co/WxzjKLL/Yellow-Green-Food-Facebook-Cover-1.png" />
                    <div data-src="https://i.ibb.co/jLTdk3P/Yellow-Modern-Minimalist-Pizza-Food-Promotion-Instagram-Post-1.png" />
                    


                </AutoplaySlider> */}
            </div>
            <Container className="my-4">
                <Chefs></Chefs>
            </Container>
            <Deals></Deals>
        </div>
    );
};

export default Home;