import React from 'react';
import { Container } from 'reactstrap';
import '../Style/CommonSection.css';

const CommonSection = ({ title }) => {
    return (
        <section className='common_section mb-5'>
            <Container className='text-center'>
                <h1 className="text-light">
                    {title}
                </h1>
            </Container>

        </section>
    );
};

export default CommonSection;