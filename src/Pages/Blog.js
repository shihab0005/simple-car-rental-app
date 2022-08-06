import React from 'react';
import { Container, Row } from 'reactstrap';
import Helmet from '../Components/Helmet/Helmet';
import BlogList from '../Ui/BlogList';
import CommonSection from '../Ui/CommonSection';

const Blog = () => {
    return (
        <Helmet title="Blogs">
            <CommonSection title="Blogs" />
            <section>
                <Container>
                    <Row>
                        <BlogList />
                        <BlogList />
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Blog;