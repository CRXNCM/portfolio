import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A comprehensive list of tools, apps, hardware, and more that I use on a daily basis for full stack development, graphic design, and social media management."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.figma.com">Figma</Link> is my primary tool for
                    UI/UX design. I love how collaborative it is and how easy it makes
                    prototyping and design systems. I also use{' '}
                    <Link href="https://www.adobe.com/products/xd.html">Adobe XD</Link> for
                    certain projects and client work.
                  </ListItem>
                  <ListItem>
                    For motion graphics and video editing, I primarily use Adobe After Effects
                    for complex animations and <Link href="https://www.blackmagicdesign.com/products/davinciresolve">DaVinci Resolve</Link> for
                    video editing and color grading. DaVinci's free version is incredibly powerful.
                  </ListItem>
                  <ListItem>
                    My focus is primarily on 2D design and web development, so I don't
                    heavily use 3D modeling tools in my current workflow. I prefer to
                    concentrate on creating impactful user interfaces and engaging social media content.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use <Link href="https://trae.so/">Trae</Link> as my primary code editor,
                    along with <Link href="https://cursor.sh/">Cursor</Link> for AI-assisted development
                    and <Link href="https://www.warp.dev/">Warp</Link> as my intelligent terminal.
                  </ListItem>
                  <ListItem>
                    I primarily use Chrome for development and testing, with Firefox as my
                    secondary browser for cross-browser compatibility testing.
                  </ListItem>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link> is my frontend
                    JavaScript library of choice. The component-based architecture aligns
                    perfectly with my design thinking and makes building scalable UIs intuitive.
                  </ListItem>
                  <ListItem>
                    For styling, I love using <Link href="https://tailwindcss.com/">Tailwind CSS</Link> for
                    utility-first development and <Link href="https://getbootstrap.com/">Bootstrap</Link> for
                    rapid prototyping and client projects that need quick, reliable components.
                  </ListItem>
                  <ListItem>
                    For animations, I use both <Link href="https://www.framer.com/motion/">Framer Motion</Link> for
                    React animations and <Link href="https://greensock.com/gsap/">GSAP</Link> for
                    more complex timeline-based animations and performance-critical scenarios.
                  </ListItem>
                  <ListItem>
                    For building and testing UI components in isolation I use{' '}
                    <Link href="https://storybook.js.org/">Storybook</Link>. It's essential
                    for maintaining design systems and ensuring component consistency.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>System</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>Acer Predator</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Operating system</TableHeadCell>
                    <TableCell>Windows 11</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Primary Browser</TableHeadCell>
                    <TableCell>Chrome</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Secondary Browser</TableHeadCell>
                    <TableCell>Firefox</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
