import { Button } from '~/components/button';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import styles from './project-summary.module.css';

export function ProjectSummarySimple({
  id,
  visible,
  sectionRef,
  index,
  title,
  description,
  buttonText,
  buttonLink,
  alternate,
}) {
  const titleId = `${id}-title`;
  const indexText = index < 10 ? `0${index}` : index;

  return (
    <Section
      className={styles.summary}
      data-alternate={alternate}
      data-first={index === 1}
      as="section"
      aria-labelledby={titleId}
      ref={sectionRef}
      id={id}
      tabIndex={-1}
    >
      <div className={styles.content}>
        <Transition in={visible}>
          {({ visible: transitionVisible }) => (
            <div className={styles.details}>
              <div aria-hidden className={styles.index}>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!transitionVisible}
                  collapseDelay={1000}
                />
                <span className={styles.indexNumber} data-visible={transitionVisible}>
                  {indexText}
                </span>
              </div>
              <Heading
                level={3}
                as="h2"
                className={styles.title}
                data-visible={transitionVisible}
                id={titleId}
              >
                {title}
              </Heading>
              <Text className={styles.description} data-visible={transitionVisible} as="p">
                {description}
              </Text>
              <div className={styles.button} data-visible={transitionVisible}>
                <Button iconHoverShift href={buttonLink} iconEnd="arrow-right">
                  {buttonText}
                </Button>
              </div>
            </div>
          )}
        </Transition>
      </div>
    </Section>
  );
}

