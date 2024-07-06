import { Container } from '@/component'
import { NotFoundIcon } from '@/component/icon'

export default function NotFound() {
  return (
    <Container>
      <div className='m-auto flex h-[75vh] w-fit items-center text-base font-medium md:text-2xl'>
        <NotFoundIcon className='h-9 w-9 md:h-12 md:w-12' />
        <span className='ml-1 md:ml-2'>Page not found</span>
      </div>
    </Container>
  )
}
