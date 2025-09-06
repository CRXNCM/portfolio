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
import styles from './ocr-app.module.css';

const title = 'Basic OCR App';
const description =
  'A Python application for extracting text from images using OCR technology. Built with Tkinter GUI and powered by Tesseract and OpenCV for efficient text recognition.';
const roles = ['Python Development', 'GUI Design', 'OCR Integration', 'Image Processing'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const OcrApp = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.ocrApp}>
        <ProjectBackground
          src="/static/ocr-app-background.jpg"
          srcSet={`/static/ocr-app-background.jpg 1280w, /static/ocr-app-background-large.jpg 2560w`}
          width={1280}
          height={800}
          placeholder="/static/ocr-app-background-placeholder.jpg"
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/CRXNCM/Basic_OCR_App"
          roles={roles}
        />
        
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`/static/ocr-app-main.jpg 800w, /static/ocr-app-main-large.jpg 1920w`}
              width={800}
              height={500}
              placeholder="/static/ocr-app-main-placeholder.jpg"
              alt="The OCR application main interface showing image upload and text extraction."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Core Features</ProjectSectionHeading>
              <ProjectSectionText>
                The application provides a clean, intuitive interface for users to upload images 
                and extract text using advanced OCR technology. It supports multiple image formats 
                including PNG, JPG, TIFF, and BMP files.
              </ProjectSectionText>
              <ProjectSectionText>
                Real-time preview allows users to see the extracted text immediately, with options 
                to export results to text files for further processing or documentation.
              </ProjectSectionText>
            </div>
            <div className={styles.interfaceImages}>
              <Image
                className={styles.interfaceImage}
                srcSet={`/static/ocr-app-interface-1.jpg 350w, /static/ocr-app-interface-1-large.jpg 700w`}
                width={350}
                height={400}
                placeholder="/static/ocr-app-interface-1-placeholder.jpg"
                alt="OCR app interface showing image upload area and controls."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.interfaceImage}
                srcSet={`/static/ocr-app-interface-2.jpg 350w, /static/ocr-app-interface-2-large.jpg 700w`}
                width={350}
                height={400}
                placeholder="/static/ocr-app-interface-2-placeholder.jpg"
                alt="Text extraction results with export options."
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
                Built with Python and Tkinter for the GUI, the app integrates Tesseract OCR engine 
                for accurate text recognition and OpenCV for image preprocessing. The modular architecture 
                ensures maintainability and easy feature additions.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`/static/ocr-app-code.jpg 800w, /static/ocr-app-code-large.jpg 1920w`}
              width={800}
              height={500}
              placeholder="/static/ocr-app-code-placeholder.jpg"
              alt="Code structure showing the modular OCR application architecture."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`/static/ocr-app-process.jpg 440w, /static/ocr-app-process-large.jpg 880w`}
                  width={440}
                  height={790}
                  placeholder="/static/ocr-app-process-placeholder.jpg"
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={`/static/ocr-app-result.jpg 440w, /static/ocr-app-result-large.jpg 880w`}
                  width={440}
                  height={340}
                  placeholder="/static/ocr-app-result-placeholder.jpg"
                  alt="OCR processing workflow showing image input to text output."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Processing Workflow</ProjectSectionHeading>
              <ProjectSectionText>
                The application follows a streamlined workflow: image upload, preprocessing for optimal 
                OCR accuracy, text extraction using Tesseract, and result display with export capabilities. 
                This process ensures reliable text recognition across various image qualities and formats.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project Impact</ProjectSectionHeading>
              <ProjectSectionText>
                This OCR application demonstrates practical application of computer vision and text 
                recognition technologies. It serves as a foundation for document digitization projects 
                and showcases skills in Python development, GUI design, and AI integration.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src="/static/ocr-app-showcase.jpg"
              width={940}
              height={500}
              placeholder="/static/ocr-app-showcase-placeholder.jpg"
              alt="OCR application in use, showing the complete workflow from image to extracted text."
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
