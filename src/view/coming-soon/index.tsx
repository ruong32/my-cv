import { Container } from '@/component'

export const ComingSoon = () => (
  <Container>
    <div className='m-auto flex h-[75vh] w-fit items-center text-base font-medium'>
      <div className='animate-bounce'>
        <div className='font-pacifico -rotate-6 cursor-default rounded-2xl bg-[red] px-5 py-4 text-xl shadow-[inset_0_0_0_2px_white,0_0_0_3px_red] md:text-3xl'>
          Coming Soon
        </div>
      </div>
    </div>
  </Container>
)
