import { Container, NotionPage } from '@/component'
import { notionAPI } from '@/services/notion'
import { redirect } from 'next/navigation'

const CvView = async () => {
  const pageId = process.env.MY_CV_PAGE_ID
  if (!pageId) {
    redirect('/not-found')
  }
  const page = await notionAPI.getPage(pageId)
  return (
    <Container>
      <NotionPage recordMap={page} />
    </Container>
  )
}

export default CvView
