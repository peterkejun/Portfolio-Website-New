import React from 'react';
import { Container, Image, Card, Row, Col, ListGroup } from 'react-bootstrap';
import bitmoji from '../imgs/bitmoji.png';
import uw_logo from '../imgs/uw_logo.jpg';
import SAA_badge from '../imgs/SAA_badge.jpg';
import LinkedIn from '../imgs/LI-In-Bug.png';
import GitHub from '../imgs/GitHub-Mark-64px.png';
import AWS from '../imgs/AWS-Cloud-alt_light-bg.svg';

const Styles = {
    container: {
        height: '100vh',
        margin: 0,
        backgroundImage: 'linear-gradient(white, rgba(0,0,0,0.05))'
    },
    row: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 'auto',
        height: '100vh',
        margin: 'auto'
    },
    card1: {
        border: 'none',
        marginBottom: '1rem',
        backgroundColor: 'transparent'
    },
    nameTitle: {
        fontSize: '6rem'
    },
    nameSubtitle: {
        fontSize: '2rem'
    },
    card2: {
        border: 'none',
    },
    listCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '0',
        border: 'none'
    },
    listCardImg: {
        width: '60px',
        height: '60px',
    },
    linkImg: {
        width: '45px',
        height: 'auto',
        marginRight: '25px'
    }
};

const ListCard = props => {
    return (
        <Container style={Styles.listCard}>
            <div>
                <img src={props.imageSrc} style={Styles.listCardImg} />
            </div>
            <div style={{ padding: '0.5rem' }}>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="text-muted">{props.subtitle}</Card.Subtitle>
            </div>
        </Container>
    );
};

const Landing = () => {
    return (
        <Container fluid style={Styles.container}>
            <Row style={Styles.row}>
                <Col md={6}>
                    <Image src={bitmoji} style={Styles.image} />
                </Col>
                <Col md={6}>
                    <React.Fragment>
                        <Card style={Styles.card1}>
                            <Card.Body>
                                <Card.Title style={Styles.nameTitle}>Peter Ke</Card.Title>
                                <Card.Subtitle className="text-muted" style={Styles.nameSubtitle}>Developer. Student. Architect.</Card.Subtitle>
                            </Card.Body>
                        </Card>
                        <Card style={Styles.card2}>
                            <Card.Body>
                                <ListCard imageSrc={uw_logo} title="Software Engineering 2A, University of Waterloo" subtitle="Bachelor of Software Engineering, 2019 - 2024" />
                                <hr />
                                <ListCard imageSrc={SAA_badge} title="AWS Certified Solutions Architect" subtitle="Build secure and robust solutions using architectural design principles based on customer requirements" />
                            </Card.Body>
                        </Card>
                        <Container style={{ marginTop: '1.5rem' }}>
                            <a href="https://www.linkedin.com/in/peter-ke-12465b195/" target="_blank"><Image style={Styles.linkImg} src={LinkedIn} /></a>
                            <a href="https://github.com/peterkejun" target="_blank"><Image style={Styles.linkImg} src={GitHub} /></a>
                            <a href="https://www.youracclaim.com/badges/6cce4ac8-48ff-411b-9ef9-eb9a6e2a847e/linked_in_profile" target="_blank"><Image style={Styles.linkImg} src={AWS} /></a>
                        </Container>
                    </React.Fragment>

                </Col>
            </Row>
        </Container>
    );
};

export default Landing;