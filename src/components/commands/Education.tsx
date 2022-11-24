import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Beykent University",
    desc: "Software Engineer | 2019 ~ 2022",
  },
  {
    title: "Sakarya University",
    desc: "Computer Programming | 2017 - 2019",
  },
  {
    title: "Sabancı Vocational and Technical Anatolian High School",
    desc: "Database Programming, Kocaeli | 2013 ~ 2017",
  },
];

export default Education;
