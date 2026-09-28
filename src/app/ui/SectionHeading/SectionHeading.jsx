import './SectionHeading.scss';
const sections = {
  Projects: ['01 / SELECTED WORK', 'Ideas, put into practice.'],
  'About Me': ['02 / THE PERSON', 'Curiosity is the starting point.'],
  Skills: ['03 / TOOLKIT', 'A foundation to build on.'],
  Resume: ['04 / EXPERIENCE & EDUCATION', 'Learning through doing.'],
  Contact: ['05 / START A CONVERSATION', 'Let’s connect the dots.'],
};
const SectionHeading = ({ title }) => {
  const [label, heading] = sections[title] || ['', title];
  return <div className="container"><div className="cs-section-heading" data-aos="fade-up"><p className="cs-eyebrow">{label}</p><h2>{heading}</h2><div className="cs-heading-rule" /></div></div>;
};
export default SectionHeading;
