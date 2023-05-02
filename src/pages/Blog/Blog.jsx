import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <Row>
                <h2 className='border-bottom text-center text-primary my-4 mb-2 text-uppercase fw-bold'>Blog Section</h2>
                <div className='p-4 mx-auto d-flex flex-column'>
                    <Col>
                        <div className='border rounded m-3 p-2 bg-light mx-auto'>
                            <h5 className='fw-semibold'><span className='text-success'>Question#1:</span><br />{' '}Tell us the differences between uncontrolled and controlled components.</h5><hr />
                            <p><span className='fw-bold'>Answer:<br />{' '}</span>Controlled and uncontrolled components are two types of components used in building web applications.
                                Uncontrolled Components are those that handle their state internally without relying on any external factors. They store their data in the DOM (Document Object Model) which makes it easy to retrieve when needed. Examples of uncontrolled components include input fields and textareas.<br /><br />
                                On the other hand, controlled components rely on external factors to manage their state. This means that their values are set by a parent component and any changes made must</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='border rounded m-3 p-2 bg-light mx-auto'>
                            <h5 className='fw-semibold'><span className='text-success mb-2'>Question#2:</span><br />{' '}How to validate React props using PropTypes</h5><hr />
                            <p><span className='fw-bold'>Answer:<br />{' '}</span>Prop Types is a powerful way to validate React props in your applications. This feature allows you to specify what type of data should be passed down to a component, ensuring that your code is more robust and less prone to errors. By leveraging Prop Types, you can make sure that the data flowing through your components is of the correct type and structure, which helps you catch issues early on in development. With Prop Types, you can also provide default values for props and define required properties, making it easier for</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='border rounded m-3 p-2 bg-light mx-auto'>
                            <h5 className='fw-semibold'><span className='text-success mb-2'>Question#3:</span><br />{' '}Tell us the difference between nodejs and express js.</h5><hr />
                            <p><span className='fw-bold'>Answer:<br />{' '}</span>Node.js and Express.js are both components of the popular MEAN stack used in building web applications today. Node.js is a JavaScript runtime environment that allows developers to run JavaScript code on the server side, while Express.js is a lightweight framework built on top of Node.js that simplifies the process of building web applications using Node. In other words, while Node allows you to write server-side code in JavaScript, Express provides you with tools to build your web application faster and more efficiently. Think of it this</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='border rounded m-3 p-2 bg-light mx-auto'>
                            <h5 className='fw-semibold'><span className='text-success mb-2'>Question#4:</span><br />{' '}What is a custom hook, and why will you create a custom hook?</h5><hr />
                            <p><span className='fw-bold'>Answer:<br />{' '}</span>A custom hook is a unique and memorable phrase or message that catches the attention of your audience. Its something that sets you apart from the competition and helps build brand recognition. Whether its a catchy slogan, a clever tagline, or an inspiring call-to-action, creating a custom hook can be the key to standing out in todays crowded digital landscape. In fact, businesses have been using custom hooks for years as part of their marketing strategies to engage their audiences and build loyal customers. With so</p>
                        </div>
                    </Col>
                </div>
            </Row>
        </Container>
    );
};

export default Blog;