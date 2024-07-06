import { Image, LinkButton } from '@/component'
import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapMarkerIcon,
  MessengerIcon,
  PhoneIcon
} from '@/component/icon'

export const Introduction = () => {
  return (
    <div className='flex flex-col gap-8 py-6 transition-[padding] duration-300 md:flex-row-reverse md:py-12 lg:py-20'>
      <div className='mx-auto w-[80%] max-w-[340px]'>
        <div className='relative max-w-full rounded-full pb-[100%] shadow-[0_0_16px_4px] shadow-orange-300'>
          <Image
            priority
            className='absolute h-full w-full rounded-full border-[16px] border-[#00000033] dark:border-[#ffffff55]'
            src='/asset/image/my-photo.jpg'
            alt='my photo'
          />
        </div>
      </div>
      <div className='flex-1'>
        <div className='mx-auto mt-8 w-fit rounded-t-full rounded-br-full bg-orange-500 px-5 py-2 md:mx-0 md:mt-0'>
          Hello! I&apos;m
        </div>
        <h1 className='mt-4 text-center text-3xl font-semibold md:text-left md:text-4xl'>Ruong Nguyen Trong</h1>
        <h2 className='mt-4 text-center text-xl md:text-left md:text-2xl'>Software developer</h2>
        <div className='mt-10 flex items-center justify-center text-sm text-gray-600 dark:text-gray-300 md:justify-start md:text-base'>
          <MailIcon height={24} width={24} />
          <span className='ml-2'>trongruong99@gmail.com</span>
        </div>
        <div className='mt-4 flex items-center justify-center text-sm text-gray-600 dark:text-gray-300 md:justify-start md:text-base'>
          <PhoneIcon height={24} width={24} />
          <span className='ml-2'>+84 97 207 45 37</span>
        </div>
        <div className='mt-4 flex items-center justify-center text-sm text-gray-600 dark:text-gray-300 md:justify-start md:text-base'>
          <MapMarkerIcon height={24} width={24} />
          <span className='ml-2'>Ha Noi, Vietnam</span>
        </div>
        <div className='mt-10 flex justify-center gap-8 md:justify-start'>
          <LinkButton href='https://www.facebook.com/ruong32'>
            <FacebookIcon />
          </LinkButton>
          <LinkButton href='https://m.me/ruong32'>
            <MessengerIcon />
          </LinkButton>
          <LinkButton href='https://github.com/ruong32'>
            <GithubIcon />
          </LinkButton>
          <LinkButton href='https://www.linkedin.com/in/ruong32'>
            <LinkedinIcon />
          </LinkButton>
        </div>
      </div>
    </div>
  )
}
