import React from 'react';
import '../Style/OurMember.css';
import { Col } from 'reactstrap';
import ava01 from '../assets/all-images/ava-1.jpg';
import ava02 from '../assets/all-images/ava-2.jpg';
import ava03 from '../assets/all-images/ava-3.jpg';
import ava04 from '../assets/all-images/ava-4.jpg';
import { Link } from "react-router-dom"
const our_Members = [
    {
        name: "Jhon Doe",
        experience: "5 years of experience",
        fbUrl: "#",
        instUrl: "#",
        twitUrl: "#",
        linkedinUrl: "#",
        imgUrl: ava01,
    },

    {
        name: "David Lisa",
        experience: "3.5 years of experience",
        fbUrl: "#",
        instUrl: "#",
        twitUrl: "#",
        linkedinUrl: "#",
        imgUrl: ava02,
    },

    {
        name: "Hilton King",
        experience: "2 years of experience",
        fbUrl: "#",
        instUrl: "#",
        twitUrl: "#",
        linkedinUrl: "#",
        imgUrl: ava03,
    },

    {
        name: "Lis Doet",
        experience: "1 years of experience",
        fbUrl: "#",
        instUrl: "#",
        twitUrl: "#",
        linkedinUrl: "#",
        imgUrl: ava04,
    },
];
const OurMember = () => {
    return (<>

        {
            our_Members.map((item, index) => (
                <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
                    <div className="single_member">
                        <div className="single_member_image">
                            <img src={item.imgUrl} alt="" className='w-100' />
                        </div>
                        <div className="single_member_social mt-2">
                            <Link to={item.fbUrl}><i className="ri-facebook-line"></i></Link>
                            <Link to={item.instUrl}><i className="ri-instagram-line"></i></Link>
                            <Link to={item.twitUrl}><i className="ri-twitter-line"></i></Link>
                            <Link to={item.fbUrl}><i className="ri-linkedin-line"></i></Link>
                        </div>
                        <h6 className="text-center mb-0 mt-3">{item.name}</h6>
                        <p className="section_description text-center">{item.experience}</p>
                    </div>
                </Col>
            ))
        }
    </>
    );
};

export default OurMember;