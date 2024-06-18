import { Container, FadeInSection } from "@/component";
import { About, Experience, Introduction, WhatIDo } from "./component";

const ProfileView = async () => {
  return (
    <Container>
      <FadeInSection>
        <Introduction />
      </FadeInSection>
      <FadeInSection>
        <About />
      </FadeInSection>
      <FadeInSection>
        <WhatIDo />
      </FadeInSection>
      <FadeInSection>
        <Experience />
      </FadeInSection>
    </Container>
  );
};

export default ProfileView;
