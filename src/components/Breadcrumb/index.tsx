import { Wrapper, Section, BreadcrumbProps, Divider } from './styled'
import { useTheme } from '../../theme'

export const Breadcrumb = ({ sections, divider }: BreadcrumbProps): JSX.Element => (
  <Wrapper>
    {sections.map((section, index) => (
      <>
        {section.link ? (
          <a style={{ textDecoration: 'none' }} href={section.link}>
            <Section {...(section.active && { active: section.active })}>
              <span>{section.title}</span>
            </Section>
          </a>
        ) : (
          <Section {...(section.active && { active: section.active })}>
            <span>{section.title}</span>
          </Section>
        )}
        {sections.length - 1 !== index && <Divider>{divider || '>'}</Divider>}
      </>
    ))}
  </Wrapper>
)
