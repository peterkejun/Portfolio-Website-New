import React from 'react';
import { Container, Image, Card } from 'react-bootstrap';
import Chart from 'chart.js';

import CloudFront from '../imgs/Amazon-CloudFront_light-bg.svg';
import DynamoDB from '../imgs/Amazon-DynamoDB_light-bg.svg';
import EC2 from '../imgs/Amazon-EC2_light-bg.svg';
import AutoScaling from '../imgs/Amazon-EC2-Auto-Scaling_light-bg.svg';
import RDS from '../imgs/Amazon-RDS_light-bg.svg';
import Route53 from '../imgs/Amazon-Route-53_light-bg.svg';
import S3 from '../imgs/Amazon-Simple-Storage-Service-S3_light-bg.svg';
import Django from '../imgs/django-logo.svg';
import ELB from '../imgs/Elastic-Load-Balancing-ELB_light-bg.svg';
import MongoDB from '../imgs/mongodb-logo.png';
import Flask from '../imgs/flask-logo.png';
import MySQL from '../imgs/mysql-logo.png';
import Node from '../imgs/node-logo.png';
import ReactLogo from '../imgs/react-logo.png';

import './Skills.css';

const SkillItem = props => {
    return (
        <div className="skill-item" >
            <div>
                <Image className="skill-item-image" src={props.image} roundedCircle />
            </div>
            <p className="skill-item-title">{props.title}</p>
        </div>
    );
};


class Skills extends React.Component {

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        new Chart(ctx, {
            // The type of chart we want to create
            type: 'doughnut',

            // The data for our dataset
            data: {
                labels: ['React', 'Node JS', 'Django', 'WebSocket', 'GraphQL', 'JWT', 'Kafka'],
                datasets: [{
                    data: [30, 20, 20, 10, 10, 8, 2],
                    backgroundColor: [
                        'rgb(0, 185, 198)', 'rgb(220, 221, 164)', 'rgb(205, 135, 109)', 'rgb(60, 157, 219)', 'rgb(208, 129, 196)', 'rgb(0, 204, 174)', 'rgb(174, 207, 164)'],
                }]
            },

            // Configuration options go here
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    render() {
        return (
            <div id="skill-set-page" style={{ padding: '50px' }}>
                <h1 id="skill-set-title">My Skill Set</h1>
                <Container className="skill-container">
                    <SkillItem image={Django} title="Django" />
                    <SkillItem image={Node} title="Node JS" />
                    <SkillItem image={Flask} title="Flask" />
                    <SkillItem image={ReactLogo} title="React" />
                    <SkillItem image={MySQL} title="MySQL" />
                    <SkillItem image={MongoDB} title="MongoDB" />
                    <SkillItem image={DynamoDB} title="DynamoDB" />
                    <SkillItem image={EC2} title="EC2" />
                    <SkillItem image={CloudFront} title="CloudFront" />
                    <SkillItem image={S3} title="S3" />
                    <SkillItem image={Route53} title="Route53" />
                    <SkillItem image={RDS} title="RDS" />
                    <SkillItem image={ELB} title="Elastic Load Balancer" />
                    <SkillItem image={AutoScaling} title="Auto Scaling" />
                </Container>
                <Card className="chart-card">
                    <Card.Body>
                        <Card.Title>My Tech Circle</Card.Title>
                        <canvas style={{ height: '100%' }} ref={this.canvasRef} />
                    </Card.Body>
                </Card>
            </div>
        );
    }

}

export default Skills;