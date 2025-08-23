import { useState, useRef } from 'react';
import { Button } from '~/components/button';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Section } from '~/components/section';
import { Icon } from '~/components/icon';
import { Link } from '~/components/link';
import { Transition } from '~/components/transition';
import { projects } from '~/data/projects';
import styles from './projects-showcase.module.css';

const ProjectCard = ({ project, delay = 0, visible = true }) => (
  <Transition in={visible} timeout={{ enter: 0, exit: 300 }}>
    {({ visible, nodeRef }) => (
      <div 
        ref={nodeRef}
        className={styles.projectCard}
        style={{
          '--delay': `${delay}ms`,
        }}
        data-visible={visible}
      >
        <div className={styles.projectImage}>
          {project.imageUrl ? (
            <img src={project.imageUrl} alt={`${project.title} screenshot`} />
          ) : (
            <div className={styles.imagePlaceholder}>
              <Icon icon="image" className={styles.placeholderIcon} />
              <Text className={styles.placeholderText}>Screenshot coming soon</Text>
            </div>
          )}
          <div className={styles.projectOverlay}>
            <div className={styles.projectCategory}>
              {project.category}
            </div>
          </div>
        </div>
        
        <div className={styles.projectContent}>
          <div className={styles.projectHeader}>
            <Heading level={3} className={styles.projectTitle}>
              {project.title}
            </Heading>
            <div className={styles.projectActions}>
              <Link 
                href={project.githubUrl} 
                className={styles.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Icon icon="github" />
              </Link>
            </div>
          </div>
          
          <Text className={styles.projectDescription}>
            {project.shortDescription}
          </Text>
          
          <div className={styles.projectTechnologies}>
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span key={tech} className={styles.techTag}>
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className={styles.techMore}>
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    )}
  </Transition>
);

export const ProjectsShowcase = ({ 
  id, 
  sectionRef, 
  visible = true,
  initialCount = 8 
}) => {
  const [showAll, setShowAll] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const expandedRef = useRef();
  
  const visibleProjects = showAll ? projects : projects.slice(0, initialCount);
  const remainingCount = Math.max(0, projects.length - initialCount);
  
  const handleToggle = () => {
    setIsAnimating(true);
    setShowAll(!showAll);
    
    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
    
    // Smooth scroll to expanded section if opening
    if (!showAll) {
      setTimeout(() => {
        if (expandedRef.current) {
          expandedRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest' 
          });
        }
      }, 300); // Increased delay to ensure DOM is ready
    }
  };

  return (
    <Section 
      className={styles.projectsShowcase}
      id={id}
      ref={sectionRef}
      tabIndex={-1}
    >
      <Transition in={visible} timeout={{ enter: 0, exit: 0 }}>
        {({ visible: sectionVisible, nodeRef }) => (
          <div ref={nodeRef} className={styles.content} data-visible={sectionVisible}>
            <div className={styles.sectionHeader}>
              <Heading 
                className={styles.sectionTitle} 
                level={2}
                data-visible={sectionVisible}
              >
                Featured Projects
              </Heading>
              <Text 
                className={styles.sectionDescription}
                data-visible={sectionVisible}
                style={{ '--delay': '200ms' }}
              >
                A showcase of my development projects spanning multiple technologies and domains.
                From AI-powered applications to web development and system programming.
              </Text>
            </div>

            <div className={styles.projectsGrid}>
              {visibleProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  visible={sectionVisible && (!isAnimating || index < initialCount)}
                  delay={index * 100}
                />
              ))}
            </div>

            {remainingCount > 0 && (
              <div className={styles.expandSection} ref={expandedRef}>
                <Button
                  className={styles.expandButton}
                  onClick={handleToggle}
                  disabled={isAnimating}
                  iconEnd={showAll ? "chevronUp" : "chevronDown"}
                >
                  {showAll 
                    ? "Show Less Projects" 
                    : `Show ${remainingCount} More Projects`
                  }
                </Button>
                
                {showAll && (
                  <Text className={styles.expandedNote}>
                    Showing all {projects.length} projects. 
                    Click on any GitHub icon to view the source code.
                  </Text>
                )}
              </div>
            )}
          </div>
        )}
      </Transition>
    </Section>
  );
};
