import { Container, FadeInSection } from "@/component/atom"
import { About, Experience, Introduction, WhatIDo } from "./component"

const HomeView = () => {
    return (
        <Container>
            <FadeInSection>
                <Introduction/>
            </FadeInSection>
            <FadeInSection>
                <About/>
            </FadeInSection>
            <FadeInSection>
                <WhatIDo/>
            </FadeInSection>
            <FadeInSection>
                <Experience/>
            </FadeInSection>
        </Container>
    )
}

export default HomeView
