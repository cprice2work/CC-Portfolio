import { FaBrain, FaCode, FaLaptopCode } from "react-icons/fa";
import { SectionHeading } from "../styles/common/SectionHeading.style";
import { IconWrapper, ServicesItem, SingleService, StyledServicesSection } from "../styles/sections/ServicesSection.styled";

export const ServicesSection = () => {
    return(
        <>
            <StyledServicesSection id="services">
                <SectionHeading>
                    <h1>Services</h1>
                    <p>Excited to work with you </p>
                </SectionHeading>
                <ServicesItem>
                    <SingleService>
                        <IconWrapper>
                            <FaCode/>
                        </IconWrapper>
                        <h1>Web Deveoplment</h1>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quia repellendus quam, maiores distinctio explicabo laboriosam odio sit facere alias omnis, ullam, quae quo molestiae quaerat magnam voluptatum deleniti nostrum.</p>
                    </SingleService>
                    <SingleService>
                        <IconWrapper>
                            <FaLaptopCode/>
                        </IconWrapper>
                        <h1>Web Deveoplment</h1>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo animi doloremque non maxime, eos quod quas ex dolorum minus itaque rerum aliquid explicabo illum iste perspiciatis officia quos? Omnis.</p>.
                    </SingleService>
                    <SingleService>
                        <IconWrapper>
                            <FaBrain/>
                        </IconWrapper>
                        <h1>Web Deveoplment</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum voluptates, quasi adipisci nobis sequi autem blanditiis ullam magni vel? Explicabo veniam numquam magnam ducimus. Repellendus beatae sunt aliquam nostrum eveniet!</p>
                    </SingleService>
                </ServicesItem>
            </StyledServicesSection>
            <hr/>
        </>
    );
};