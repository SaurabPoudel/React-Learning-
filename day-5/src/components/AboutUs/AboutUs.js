import React from 'react';
import { StyledAboutUs } from './AboutUs.styled';
import { FaCheckCircle } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <StyledAboutUs>
      <h1>About Us</h1>
      <p>We are a team of dedicated professionals who are passionate about creating high-quality websites and applications. <FaCheckCircle size={16} color="#3f51b5" /> Our goal is to help businesses and organizations achieve their online goals by providing them with the latest technologies and expert guidance.</p>
      <p>We have a wide range of experience in different industries and have worked with clients of all sizes, from small startups to large corporations. <FaCheckCircle size={16} color="#3f51b5" /> Our team is composed of experts in web development, design, marketing, and project management, who work closely together to deliver the best possible results.</p>
    </StyledAboutUs>
  );
};

export default AboutUs;