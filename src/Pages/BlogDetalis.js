import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Row, Input } from 'reactstrap';
import blogData from '../assets/data/blogData';
import Helmet from '../Components/Helmet/Helmet';
import blogImg from '../assets/all-images/ava-1.jpg'
import '../Style/BlogDetails.css';

const BlogDetalis = () => {
    const { slug } = useParams();
    const singleBlog = blogData.find(blog => blog.title === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [singleBlog]);

    return (
        <Helmet title={singleBlog.title}>
            <Container>
                <Row>
                    <Col lg="8" md="8">
                        <div className="blog_details mt-5 ">
                            <img className='w-100' src={singleBlog.imgUrl} alt="" />
                            <h2 className="section_title">{singleBlog.title}</h2>

                            <div className="blog_publisher d-flex align-items-center gap-4 mb-4">
                                <span className="blog_author d-flex gap-1">
                                    <i className="ri-user-line"></i>{singleBlog.author}
                                </span>
                                <span className="d-flex align-items-center gap-1 section_description">
                                    <i className="ri-calendar-line"></i>{singleBlog.date}
                                </span>

                                <span className="d-flex align-items-center gap-1 section_description">
                                    <i className="ri-time-line"></i>{singleBlog.time}
                                </span>
                            </div>
                            <p className="section_description">
                                {singleBlog.description}
                            </p>
                            <h6 className="p-3 fw-normal">
                                <blockquote className='fs-4'>{singleBlog.quote}</blockquote>
                            </h6>
                            <p className="section_description">
                                {singleBlog.description}
                            </p>
                        </div>
                        <div className="comment_list mt-3">
                            <h4 className="mb-3">3 Comments</h4>
                            <div className="single_comment d-flex gap-3">
                                <img src={blogImg} alt="" />
                                <div className="comment_content ">
                                    <h6 className="mb-0 fw-bolder">David Worner</h6>
                                    <p className="mb-0 ">14 August , 2022</p>
                                    <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, blanditiis suscipit tenetur voluptate impedit consequatur a doloribus eligendi saepe et?</p>
                                    <span className='reply d-flex align-items-center gap-1 mb-5'><i className="ri-reply-line"></i>Reply</span>
                                </div>
                            </div>
                            {/* comment form */}
                            <div className="leave_comment_form mt-5">

                                <h4>Leave A Comment</h4>
                                <p className="">
                                    You Must Sign-in To Make A Post Or Comment
                                </p>
                                <Form>
                                    <FormGroup className='d-flex gap-3'>
                                        <Input type="text" name="" placeholder='Your Full Name' />
                                        <Input type="email" name="" placeholder='Your Email' />
                                    </FormGroup>

                                    <FormGroup className='d-flex gap-3'>
                                        <textarea row={6} className="w-100 py-2 px-3" placeholder='Comment....' />
                                    </FormGroup>
                                    <button className=" mb-3 comment_btn">Post Comment</button>
                                </Form>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4" md="4">
                        <h4 className='mt-5'>Recent Post</h4>
                        {
                            blogData.map(item => (
                                <div className="recent_blog_post mb-1" key={item.id}>
                                    <div className="recent_blog_item d-flex gap-3">
                                        <img src={item.imgUrl} alt="" className='w-25 rounded-2' />
                                        <h6><Link to={`/blogs/${item.title}`}>{item.title}</Link></h6>
                                    </div>
                                </div>
                            ))
                        }
                    </Col>
                </Row>
            </Container>

        </Helmet >
    );
};

export default BlogDetalis;