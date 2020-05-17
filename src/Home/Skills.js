import React from 'react';
import { Container, Image } from 'react-bootstrap';

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


const Styles = {
    title: {
        weight: ''
    },
    skillContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    skillItemContainer: {
        display: 'flex',
        borderRadius: '30px',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.05)',
        padding: '0.25rem 12px 0.25rem 0.5rem',
        margin: '5px',
        fontSize: '20px',
        color: 'rgba(0,0,0,0.54)',
    },
    skillImage: {
        height: '30px',
        width: 'auto',
        margin: '0 0.5rem 0 0',
    },
    skillTitle: {
        margin: 0,
    },
};

const SkillItem = props => {
    return (
        <div style={Styles.skillItemContainer} >
            <div>
                <Image src={props.image} style={Styles.skillImage} roundedCircle />
            </div>
            <p style={Styles.skillTitle}>{props.title}</p>
        </div>
    );
};


const Skills = () => {
    return (
        <div style={{ padding: '50px' }}>
            <h1>My Skill Set</h1>
            <Container style={Styles.skillContainer}>
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
        </div>
    );
};

export default Skills;