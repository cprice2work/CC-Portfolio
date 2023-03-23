import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { SectionHeading } from "../styles/common/SectionHeading.style"
import { ContactInfo, DetailsWrapper, ImageWrapper, StyledContactForm, StyledContactSection } from "../styles/sections/ContactSection.styled"

export const ContactSection = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v14nymp', 'template_e8cy4zv', form.current, 'iUtMJc3ALVLc50Obw')
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <>
        <StyledContactSection>    
            <SectionHeading>
                <h1>Contact</h1>
                <p>In touch</p>
            </SectionHeading>
            <DetailsWrapper>
                <ContactInfo>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, odio saepe repellat officia voluptates odit incidunt culpa deserunt, dolorem aliqua</p>
                    <p>
                        <i>gow al the irecti o<strong>"Gig</strong></i>
                    </p>
                    <div>
                        <a href="mailto:cprice2work@gmail.com">cprice2work@gmail.com</a>
                    </div>
                    <ImageWrapper>
                        <img src="./images/profile.jpg" alt="contact" />
                    </ImageWrapper>
                </ContactInfo>
                <StyledContactForm>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </StyledContactForm>
            </DetailsWrapper>
            
        </StyledContactSection>
        <hr/>
        </>
    )
}