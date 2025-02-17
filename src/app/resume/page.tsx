import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ResumeSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function ResumeEntry({
  place,
  title,
  children,
}: {
  place: string
  title: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Eyebrow>{place}</Card.Eyebrow>
      <Card.Title as="h3">{title}</Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Resume',
  description:
    'My education, applied experience, and academic research experience.',
}

export default function Resume() {
  return (
    <SimpleLayout title="Resume" intro="">
      <div className="space-y-20">
        <ResumeSection title="Academic Experience">
          <ResumeEntry
            title="Research Assistant"
            place="2016, Human-Robot Interaction Lab, University of Manitoba"
          >
            Designing and conducting user studies (experiments, interviews,
            surveys), analyzing user study data (questionnaire, interview, and
            video data), providing guidelines design guidelines, oral and
            written data presentation.
          </ResumeEntry>
        </ResumeSection>

        <ResumeSection title="Applied Experience">
          <ResumeEntry
            title="Graduate UX Researcher - SafeCount"
            place="2015-2016, Georgia Institute of Technology"
          >
            Planning and conducting user research to gather requirements
            (interviews, focus groups, field testing), conducting heuristic
            evaluations, usability testing, affinity diagrams, providing design
            recommendations.
          </ResumeEntry>

          <ResumeEntry
            title="Graduate UX Designer/Researcher - Drum Assistant"
            place="2015-2016, Georgia Institute of Technology"
          >
            Planning and conducting user studies to compare designs (one-on-one
            interviews), analyzing data, preparing reports and presenting
            insights, providing design recommendations, prototyping, product
            design.
          </ResumeEntry>

          <ResumeEntry
            title="Graduate UX/Interaction Designer - SWear"
            place="2015-2016, Georgia Institute of Technology"
          >
            Creating user personas, defining problem space by working with
            client, designing the interaction, interface, and user experience of
            the application, wireframing, prototyping.
          </ResumeEntry>
        </ResumeSection>

        <ResumeSection title="Education">
          <ResumeEntry
            title="Ph.D. in Computer Science and Psychology"
            place="2021,  University of Manitoba"
          >
            Human-computer interaction and human-robot interaction, focusing on
            user research and design for increased usability.
          </ResumeEntry>

          <ResumeEntry
            title="M.Sc. in Human-Computer Interaction"
            place="2016, Georgia Institue of Technology"
          >
            User research and design of software and technology. In specific:
            user-centered design and research, interaction design, iterative
            design process, evidence-based design, user experience research,
            agile process, and engineering psychology.
          </ResumeEntry>

          <ResumeEntry
            title="B.Sc. in Psychology (honours), Minor Mathematics"
            place="2014, University of Manitoba"
          >
            Social psychology research.
          </ResumeEntry>
        </ResumeSection>
      </div>
    </SimpleLayout>
  )
}
