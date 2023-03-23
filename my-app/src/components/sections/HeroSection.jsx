import { HeroContent, HeroSocialIcons, SocialIcon, StyledArrowDown, StyledHeroSection } from "../styles/sections/HeroSection.styled"
import { CTAButton } from "../styles/common/CTAButton.styled";
import { FaArrowDown, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

export const HeroSection = () => {
    return(
        <>
        <StyledHeroSection id="hero-section">
            <HeroContent>
                <h1>Christian Price</h1>
                <h3>{"{Front-End Web Developer}"}</h3>
                <p>HTMl . CSS . JavaScript . React . Next.js</p>
                <div>
                    <CTAButton href="#projects">Projects</CTAButton>
                    <CTAButton href="#contact" primary margin="0 0 20px">Hire Me</CTAButton>
                </div>
            </HeroContent>
            <StyledArrowDown href="#about">
                <FaArrowDown/>
            </StyledArrowDown>
            <HeroSocialIcons>
                <SocialIcon href="#" target="_blank">
                    <FaYoutube/>
                </SocialIcon>
                <SocialIcon href="#" target="_blank">
                    <FaGithub/>
                </SocialIcon>
                <SocialIcon href="#" target="_blank">
                    <FaTwitter/>
                </SocialIcon>
            </HeroSocialIcons>
        </StyledHeroSection>
        </>
    )
}