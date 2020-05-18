import React from 'react';
import { Card, CardGroup, Toast } from 'react-bootstrap';
import './Intro.css';


const titles = [
    'Developer', 'Student', 'Architect'
];

const toasts = [
    {
        title: 'Apache Kafka',
        date: 'May 2020',
        text: <div>Finished <a href="https://www.youtube.com/watch?v=pB5ZW78Oup4" target="_blank"><strong style={{ color: 'rgb(21,112,98)' }}>"Getting Started with Apache Kafka"</strong></a>, a course by Ryan Plant on Pluralsight.</div>
    },
    {
        title: 'Amazon Web Services',
        date: 'April 2020',
        text: <div>Received <a href="https://www.youracclaim.com/badges/6cce4ac8-48ff-411b-9ef9-eb9a6e2a847e/linked_in_profile" target="_blank"><strong style={{ color: 'rgb(21,112,98)' }}>AWS Certified Solutions Architect - Associate</strong></a> Certification.</div>
    },
];

const descriptions = [
    // Developer
    <p className="code-snippet">
        <span className="keyword">var</span> <span className="name">peter</span> <span className="punctuation">=</span> <span className="braces">{`{`}</span><br />
        &emsp;&emsp;<span className="attribute">lang</span><span className="punctuation">:</span> <span className="braces">[</span><br />
        &emsp;&emsp;&emsp;&emsp;<span className="string">'JS'</span><span className="punctuation">,</span>
        <span className="string"> 'Python'</span><span className="punctuation">,</span>
        <span className="string"> 'PHP'</span><span className="punctuation">,</span><br />&emsp;&emsp;&emsp;&emsp;
        <span className="string">'Swift'</span><span className="punctuation">,</span>
        <span className="string"> 'Java'</span><span className="punctuation">,</span>
        <span className="string"> 'C/C++'</span><span className="punctuation">,</span><br />
        &emsp;&emsp;<span className="braces">]</span><span className="punctuation">,</span><br />
        &emsp;&emsp;<span className="attribute">skill</span><span className="punctuation">:</span> <span className="braces">{`{`}</span><br />
        &emsp;&emsp;&emsp;&emsp;<span className="attribute">Cloud</span><span className="punctuation">:</span> <span className="braces">{`[`}</span><br />
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className="string">'AWS'</span><span className="punctuation">,</span>
        <span className="string"> 'Confluent Kafka'</span><span className="punctuation">,</span><br />
        &emsp;&emsp;&emsp;&emsp;<span className="braces">{`}`}</span><span className="punctuation">,</span><br />
        &emsp;&emsp;&emsp;&emsp;<span className="attribute">Web</span><span className="punctuation">:</span> <span className="braces">{`[`}</span><br />
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className="string">'MERN'</span><span className="punctuation">,</span>
        <span className="string"> 'LAMP'</span><span className="punctuation">,</span><br />
        &emsp;&emsp;&emsp;&emsp;<span className="braces">{`}`}</span><span className="punctuation">,</span><br />
        &emsp;&emsp;<span className="braces">}</span><span className="punctuation">,</span><br />
        <span className="braces">}</span><span className="punctuation">;</span>
    </p>,

    // Student
    <React.Fragment>
        {toasts.map((toast, i) => <React.Fragment key={i}>
            <Toast className="calendar-toast" show={true}>
                <Toast.Header>
                    <img
                        src={toast.imgSrc}
                        className="rounded mr-2"
                        alt=""
                    />
                    <strong className="mr-auto">{toast.title}</strong>
                    <small>{toast.date}</small>
                </Toast.Header>
                <Toast.Body>{toast.text}</Toast.Body>
            </Toast>
        </React.Fragment>)}
    </React.Fragment>,

    // Architect
    'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
];

const subtitles = [
    undefined,
    "Constantly learning...",
    undefined,
];


const Intro = () => {
    return (<div id="intro-wrapper">
        <CardGroup id="intro-deck">
            {titles.map((title, i) =>
                <React.Fragment>
                    <Card className={i == 0 ? 'intro-card' : 'intro-card left-border'} key={i}>
                        <Card.Body>
                            <Card.Title className="intro-card-title">{title}</Card.Title>
                            <Card.Subtitle className="mb-2 intro-card-subtitle">{subtitles[i]}</Card.Subtitle>
                            <Card.Text className="intro-card-text">{descriptions[i]}</Card.Text>
                        </Card.Body>
                    </Card>
                </React.Fragment>)}
        </CardGroup>
    </div>
    )
};

export default Intro;