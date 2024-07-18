import { Container } from '@/component'
import { Tags } from './tags'
import { MiniProfile } from './mini-profile'

const BlogView = async () => {
  return (
    <>
      <div>
        <img className='w-full' alt='banner' src='https://picsum.photos/1000/300' />
      </div>
      <Container className='mt-4 grid items-start gap-4 lg:grid-cols-[200px,1fr,200px]'>
        <div className='sticky top-[84px] hidden lg:block'>
          <Tags />
        </div>
        <div className='h-[2000px]'>Content</div>
        <div className='sticky top-[84px] row-start-1 lg:row-auto'>
          <MiniProfile />
        </div>
      </Container>
    </>
  )
}

export default BlogView
