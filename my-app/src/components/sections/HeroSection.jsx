import { HeroContent, StyledHeroSection } from "../styles/sections/HeroSection.styled"
import { CTAButton } from "../styles/common/CTAButton.styled";

export const HeroSection = () => {
    return(
        <>
        <StyledHeroSection>
            <HeroContent>
                <h1>Christian Price</h1>
                <h3>{"{Front-End Wen Developer}"}</h3>
                <p>HTMl . CSS . JavaScript . React . Next.js</p>
                <div>
                    <CTAButton href="#projects">Projects</CTAButton>
                    <CTAButton href="#contact" primary margin="0 0 20px">Hire Me</CTAButton>
                </div>
            </HeroContent>
        </StyledHeroSection>
        </>
    )
}