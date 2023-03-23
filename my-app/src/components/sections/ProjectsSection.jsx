import { FaGithub, FaLink } from "react-icons/fa";
import { SectionHeading } from "../styles/common/SectionHeading.style";
import { ProjectDescription, ProjectImageContainer, SingleProject, SlantedCard, StyledProjectsSection, Tags } from "../styles/sections/ProjectsSection.styled";
import { Projects } from "../../data/Projects";

export const ProjectsSection = () => {
    return(
        <>
        <StyledProjectsSection id="projects">
            <SectionHeading>
                <h1>Projects</h1>
                <p>These are some of my best projects...</p>
            </SectionHeading>
            <div>
                {Projects && Projects.map((project, index) => (
                    <SingleProject key={index}>
                        <ProjectImageContainer 
                        href={project.projectlink} 
                        target="_blank"
                        >
                            <img src={project.thumbnail} alt={project.title}/>
                            <SlantedCard/>
                        </ProjectImageContainer>
                        <ProjectDescription>
                            <h1>
                                {project.title}
                            </h1>
                            <Tags>
                                {project.tags && project.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex}>{tag}</span>
                                ))}
                            </Tags>
                            <p>{project.paragraph}</p>
                            <div>
                                <a href={project.codelink} target="_blank">
                                    <FaGithub/>
                                    <span>View Code</span>
                                </a>
                                <a href={project.projectlink} target="_blank">
                                    <FaLink/>
                                    <span>{project.projectlinkText}</span>
                                </a>
                            </div>
                        </ProjectDescription>
                    </SingleProject>
                ))}
            </div>
        </StyledProjectsSection>
            <hr />
        </>
    );
};