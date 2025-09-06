import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './expense-tracker.module.css';

const title = 'Expense Tracker';
const description =
  'A JavaScript web application for managing personal expenses and budgeting. Features include expense categorization, spending analysis, and budget tracking with an intuitive user interface.';
const roles = ['JavaScript Development', 'Web App Design', 'Budget Management', 'Data Visualization'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const ExpenseTracker = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.expenseTracker}>
        <ProjectBackground
          src="/static/expense-tracker-background.jpg"
          srcSet={`/static/expense-tracker-background.jpg 1280w, /static/expense-tracker-background-large.jpg 2560w`}
          width={1280}
          height={800}
          placeholder="/static/expense-tracker-background-placeholder.jpg"
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/CRXNCM/Expense-Tracker"
          roles={roles}
        />
        
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`/static/expense-tracker-main.jpg 800w, /static/expense-tracker-main-large.jpg 1920w`}
              width={800}
              height={500}
              placeholder="/static/expense-tracker-main-placeholder.jpg"
              alt="The Expense Tracker main dashboard showing expense overview and recent transactions."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Key Features</ProjectSectionHeading>
              <ProjectSectionText>
                The Expense Tracker provides a comprehensive solution for personal finance management. 
                Users can add, categorize, and track expenses with real-time budget monitoring and 
                spending analytics.
              </ProjectSectionText>
              <ProjectSectionText>
                The application features an intuitive dashboard with visual charts, expense history, 
                and customizable categories to help users understand their spending patterns and 
                achieve their financial goals.
              </ProjectSectionText>
            </div>
            <div className={styles.interfaceImages}>
              <Image
                className={styles.interfaceImage}
                srcSet={`/static/expense-tracker-interface-1.jpg 350w, /static/expense-tracker-interface-1-large.jpg 700w`}
                width={350}
                height={400}
                placeholder="/static/expense-tracker-interface-1-placeholder.jpg"
                alt="Expense entry form with category selection and amount input."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.interfaceImage}
                srcSet={`/static/expense-tracker-interface-2.jpg 350w, /static/expense-tracker-interface-2-large.jpg 700w`}
                width={350}
                height={400}
                placeholder="/static/expense-tracker-interface-2-placeholder.jpg"
                alt="Budget overview with spending charts and category breakdown."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Technical Implementation</ProjectSectionHeading>
              <ProjectSectionText>
                Built with vanilla JavaScript, the app demonstrates modern web development practices 
                including responsive design, local storage for data persistence, and dynamic content 
                generation. The modular architecture ensures maintainable and scalable code.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`/static/expense-tracker-code.jpg 800w, /static/expense-tracker-code-large.jpg 1920w`}
              width={800}
              height={500}
              placeholder="/static/expense-tracker-code-placeholder.jpg"
              alt="Code structure showing the modular expense tracking application architecture."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`/static/expense-tracker-charts.jpg 440w, /static/expense-tracker-charts-large.jpg 880w`}
                  width={440}
                  height={790}
                  placeholder="/static/expense-tracker-charts-placeholder.jpg"
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={`/static/expense-tracker-analytics.jpg 440w, /static/expense-tracker-analytics-large.jpg 880w`}
                  width={440}
                  height={340}
                  placeholder="/static/expense-tracker-analytics-placeholder.jpg"
                  alt="Expense analytics dashboard with spending trends and category distribution."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Data Visualization</ProjectSectionHeading>
              <ProjectSectionText>
                The application provides comprehensive spending insights through interactive charts 
                and graphs. Users can visualize their spending patterns, track budget progress, 
                and identify areas for potential savings with clear, actionable data presentation.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>User Experience</ProjectSectionHeading>
              <ProjectSectionText>
                Designed with user experience in mind, the Expense Tracker offers a clean, 
                intuitive interface that makes financial management accessible to everyone. 
                The responsive design ensures seamless usage across all devices.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src="/static/expense-tracker-showcase.jpg"
              width={940}
              height={500}
              placeholder="/static/expense-tracker-showcase-placeholder.jpg"
              alt="Expense Tracker application in use across different devices and screen sizes."
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
