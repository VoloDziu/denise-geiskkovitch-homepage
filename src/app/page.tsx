import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/hero.png'

import imgNaoObedience from '@/images/robot-authority-big.png'
import imgTrust from '@/images/robot-trust.jpg'
import imgProxemics from '@/images/proxemics.jpg'
import imgIcons from '@/images/Icons-for-children.jpg'
import { Card } from '@/components/Card'

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

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-purple-500 dark:text-zinc-200 dark:hover:text-purple-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-purple-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About - Denise Geiskkovitch',
  description:
    'I’m Denise Geiskkovitch. I am an assistant professor in the Department of Computing and Software, and the Barber Gennum Chair in Information Technology at McMaster University.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Denise Geiskkovitch.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I am an assistant professor in the Department of Computing and
              Software, and the Barber Gennum Chair in Information Technology at
              McMaster University.
            </p>
            <p>
              My research spans Human-Computer Interaction and Human-Robot
              Interaction, centering on understanding people’s experiences with
              robots and learning how to design and develop robots to shape such
              experiences.
            </p>
            <p>
              I am accepting exceptional graduate students on an ongoing basis.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="http://www.linkedin.com/in/denisegeiskkovitch"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="http://huron.cas.mcmaster.ca"
              icon={LinkIcon}
              className="mt-4"
            >
              HuRON Lab Website
            </SocialLink>
            <SocialLink
              href="mailto:geiskkod@mcmaster.ca"
              icon={MailIcon}
              className="mt-4"
            >
              geiskkod@mcmaster.ca
            </SocialLink>
          </ul>
        </div>
      </div>

      <div className="mt-20 border-t border-zinc-100 pt-30 md:mt-30 dark:border-zinc-700/40">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Some of my projects:
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400"></p>
        </div>
        <div className="mt-16 sm:mt-20">
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
        </div>
      </div>
    </Container>
  )
}
