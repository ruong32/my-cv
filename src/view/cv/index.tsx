import { Container, NotionPage } from '@/component'
import { notionAPI } from '@/services/notion'
import { redirect } from 'next/navigation'
import { PrintButton } from './print-button'

const CvView = async () => {
  const pageId = process.env.MY_CV_PAGE_ID
  if (!pageId) {
    redirect('/not-found')
  }
  const page = await notionAPI.getPage(pageId)
  return (
    <Container>
      <PrintButton />
      <NotionPage className='my-cv' recordMap={page} />
    </Container>
  )
}

export default CvView
