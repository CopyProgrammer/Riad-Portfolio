'use client';
import './Skill.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import SectionVideo from '../SectionVideo/SectionVideo';

const SkillsGrouped = ({ data }) => {
  const { title, text, skillGroups } = data;
  return (
    <section id="skills" className="st-dark-bg" style={{ position: 'relative', overflow: 'hidden' }}>
      <SectionVideo
        src="/videos/backgrounds/skills-programming.mp4"
        poster="/videos/backgrounds/skills-programming.webp"
        overlayClass="sv-skills"
        objectPosition="center 40%"
      />
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Skills" />
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="st-skill-wrap">
              <div
                className="st-skill-heading"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <h2 className="st-skill-title">{title}</h2>
                <div className="st-skill-subtitle">{text}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="st-height-b0 st-height-lg-b30"></div>
            <div className="st-skill-groups">
              {skillGroups.map((group, groupIndex) => (
                <div
                  className="st-skill-group"
                  key={groupIndex}
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay={200 + groupIndex * 150}
                >
                  <h3 className="st-skill-group-title">{group.groupTitle}</h3>
                  <div className="st-skill-tags">
                    {group.skills.map((skill, skillIndex) => (
                      <span className="st-skill-tag" key={skillIndex}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
};

export default SkillsGrouped;
