// Import React
import React from 'react';

// Import UI components from reactstrap framework.
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

// Import the Container component.
import Container from "../../components/Container";

// Import css
import './Footer.css';

// Footer component
const Footer = (props) => {
    return (
        <div className="footer">
            <Container >
                <Card>
                    <CardBody>
                        <CardTitle className="footer-heading">
                            New York Times API Article Searcher
                        </CardTitle>
                        <CardText><b>Christopher Edynak Copyright &copy; 2018</b></CardText>


                    </CardBody>
                </Card>
            </Container>
        </div>
    );
};

// export Footer component.
export default Footer;
