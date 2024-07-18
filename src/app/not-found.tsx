import { Container } from '@/component'
import { NotFoundIcon } from '@/component/icon'

export default function NotFound() {
  return (
    <Container>
      <div className='m-auto flex h-[75vh] w-fit items-center text-base font-medium md:text-2xl'>
        <NotFoundIcon className='h-8 w-8 md:h-10 md:w-10' />
        <span className='ml-1.5 md:ml-3'>Page not found</span>
      </div>
    </Container>
  )
}
