import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Bahadır Düzcan</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Software Engineer</HighlightAlt>
      </p>
      <p>
        I’m currently working on some of my side projects
      </p>
    </AboutWrapper>
  );
};

export default About;
