import { BannerSection, StyledTopBanner } from "../styles/layout/TopBanner.styled"

export const TopBanner = () => {
    return(
        <>
        <StyledTopBanner>
            <BannerSection showOnMobile>
                <a href="mailto:cprice2work@gmail.com">👌cprice2work@gmail.com 📧</a>
            </BannerSection>
            <BannerSection>
                <a href="#">Personal Website 1/3 😎</a>
            </BannerSection>
            <BannerSection>
                💵Available for Hire😊
            </BannerSection>
        </StyledTopBanner>
        </>
    )
};