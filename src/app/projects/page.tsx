import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import imgNaoObedience from '@/images/robot-authority-big.png'
import imgTrust from '@/images/robot-trust.jpg'
import imgProxemics from '@/images/proxemics.jpg'
import imgIcons from '@/images/Icons-for-children.jpg'

const projects = [
  {
    name: 'Obedience to Robots',
    description: 'Do people obey robots in positions of authority?',
    link: {
      href: 'https://hci.cs.umanitoba.ca/projects-and-research/details/would-you-do-as-a-robot-commands',
      label: 'UofM HCI Lab Website',
    },
    img: imgNaoObedience,
  },
  {
    name: "Children's Trust Towards Robots",
    description:
      "Experiments exploring children's trust towards robot with different attributes.",
    link: {
      href: 'https://hci.cs.umanitoba.ca/projects-and-research/details/childrens-trust-towards-robots',
      label: 'UofM HCI Lab Website',
    },
    img: imgTrust,
  },
  {
    name: 'Human-Robot Proxemics',
    description: 'Does seating arrangement affect perceptions of a robot?',
    link: {
      href: 'https://hci.cs.umanitoba.ca/projects-and-research/details/human-robot-proxemics',
      label: 'UofM HCI Lab Website',
    },
    img: imgProxemics,
  },
  {
    name: 'Icons for children',
    description: 'User-centered design of app icons for children.',
    link: {
      href: 'https://hci.cs.umanitoba.ca/publications/details/icons-for-kids-can-young-children-understand-graphical-representations-of-a',
      label: 'UofM HCI Lab Website',
    },
    img: imgIcons,
  },
]

export const metadata: Metadata = {
  title: 'Projects - Denise Geiskkovitch',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex items-center justify-center overflow-hidden rounded-sm bg-white ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.img}
                alt=""
                className="aspect-[4/2.5] w-full object-cover object-center"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
