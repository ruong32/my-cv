import { Button, Image, Tag } from '@/component'
import { Download, Documentation } from '@/component/icon'
import Link from 'next/link'

export const About = () => {
  return (
    <div className='flex flex-col py-6 md:flex-row md:py-12 lg:py-20'>
      <Image className='w-full md:flex-1' src='/asset/image/programmer.png' alt='about' />
      <div className='mt-8 md:ml-4 md:mt-0 md:flex-1'>
        <h1 className='text-center text-3xl md:text-left'>About me</h1>
        <div className='mt-6 text-center text-sm font-light md:text-left'>
          Hello, I&apos;m Ruong. I&apos;m a Software engineer in Ha Noi, Viet Nam. I have worked in Software industry
          for 3 years and have deverse experiences in building websites as fullstack developer with
        </div>
        <div className='mt-4 flex flex-wrap justify-center gap-2 md:justify-start'>
          <Tag>Javascript</Tag>
          <Tag>HTML</Tag>
          <Tag>CSS</Tag>
          <Tag>Java</Tag>
          <Tag>React</Tag>
          <Tag>Next.js</Tag>
          <Tag>Express</Tag>
          <Tag>Spring Boot</Tag>
          <Tag>Vert.x</Tag>
          <Tag>MySQL</Tag>
          <Tag>MongoDB</Tag>
        </div>
        <div className='flex justify-center space-x-2 md:justify-start'>
          <Link href='asset/Nguyen Trong Ruong.pdf' target='_blank' download>
            <Button className='mx-auto mt-6 md:mx-0' leftIcon={<Download className='mr-2' />}>
              Download CV
            </Button>
          </Link>
          <Link href='asset/cv.html' target='_blank'>
            <Button color='green' className='mx-auto mt-6 md:mx-0' leftIcon={<Documentation className='mr-2' />}>
              View CV
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
