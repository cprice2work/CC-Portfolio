import { CTAButton } from "../styles/common/CTAButton.styled"
import { AboutContent, DarkCircle, GradientCircle, ImageContainer, StyledAboutSection, StyledEmoji, StyledHeading, StyledImage } from "../styles/sections/AboutSection.styled"

export const AboutSection = () => {
    return(
        <>
        <StyledAboutSection id="about">
            <ImageContainer>
                <StyledImage src="./images/profile.jpg" alt="Christian Price"/>
                <DarkCircle/>
                <GradientCircle/>
            </ImageContainer>
            <AboutContent>
                <StyledHeading>
                    Hello <StyledEmoji>👋</StyledEmoji>
                </StyledHeading>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Error libero quas vero dignissimos assumenda numquam sit sapiente, 
                    eos ad? Ullam quibusdam quidem provident dolore corrupti ipsum nobis, 
                    facilis sapiente nesciunt?</p>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Commodi dignissimos quibusdam magni natus delectus deleniti nostrum 
                    mollitia blanditiis! Magnam, inventore? Numquam reiciendis voluptates 
                    ea architecto illum ipsa blanditiis, adipisci aut.</p>
                <CTAButton href="#" target="_blank">
                    Get Portfolio📚
                </CTAButton>
            </AboutContent>
        </StyledAboutSection>
        <hr/>
        </>
    )
}