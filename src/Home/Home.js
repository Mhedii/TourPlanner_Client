import React from 'react';
import { Card, CardGroup, Carousel, } from 'react-bootstrap';
import FooterPage from '../Footer/FooterPage';
import "../Header/Header";
import Services from '../Services/Services';
const Home = () => {

    return (
        <div>


            {/* Banner */}
            <div>
                <Carousel >
                    <Carousel.Item className="text-primary">
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1587222318667-31212ce2828d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y294cyUyMGJhemFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            alt="First slide"
                        />
                        <Carousel.Caption className="text-warning">
                            <h3>Cox's Bazar</h3>
                            <p>Very cheap rate better services</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://unb.com.bd/filemanager/photos/64/Tazing-Dong.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption className="text-warning">
                            <h3>bandarban</h3>
                            <p>green valley </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://avijatrik.org/wp-content/uploads/2019/06/cover22-870x555.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption className="text-warning">
                            <h3>Sajek</h3>
                            <p>Cold weather green environment</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
            <Services></Services>
            <div className="m-5 p-5">
                <h2>Tourist Guides</h2>
                <div className="d-flex m-5 p-5 bg-primary">

                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzEvcIYOuMY5Kpo3JhLSqJ1CnrP-PVEQwW0rBocCsFXzEIaaSVIavDUO_I55wsL64adZc&usqp=CAU" alt="" />
                    </div>
                    <div>
                        <h5>Why tourist guide is important?</h5>
                        <p >
                            Experiencing any destination to its most require a lot of survey about it. Also, the expectation of a trip for each is different; the places, budget and expectations varies too. This involves a lot of your time and effort. It is surely a good idea to be able to know a bit about the culture, people, food, places etc</p>
                    </div>
                </div>
            </div>
            <div className="m-5 p-5">
                <h1>Our Guiders</h1>
                <div>


                    <CardGroup className="p-5">
                        <Card className="p-5">
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlWp6BwwlkDZMdLuX4tWzfqHQ_NeDh_zTPKw&usqp=CAU" />
                            <Card.Body>
                                <Card.Title>John Walker</Card.Title>
                                <Card.Text>
                                    Experienced over 5 years
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card className="p-5">
                            <Card.Img variant="top" src="https://3.imimg.com/data3/AQ/LI/GLADMIN-38544/tourist-guides-500x500.jpg" />
                            <Card.Body>
                                <Card.Title>Bijay vangar</Card.Title>
                                <Card.Text>
                                    Experienced over 10 years
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card className="p-5 w-100 fluid" >
                            <Card.Img variant="top" src="https://media.istockphoto.com/photos/group-of-hikers-checking-route-on-map-picture-id619733490?k=20&m=619733490&s=612x612&w=0&h=QMq48urhZPe-dPrpTHCaz-xxgUpOe_SKkeqU-13yxiA=" />
                            <Card.Body >
                                <Card.Title>Mr. Watson</Card.Title>
                                <Card.Text>
                                    Experienced over 7 years
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </CardGroup>
                </div>
            </div>

            {/* <FooterPage></FooterPage> */}
        </div>
    );
};


export default Home;