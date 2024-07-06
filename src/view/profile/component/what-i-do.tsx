import { Card } from '@/component'
import { APIIcon, BuildingWebsiteIcon, DatabaseIcon } from '@/component/icon'

export const WhatIDo = () => {
  return (
    <div className='py-6 md:py-12 lg:py-20'>
      <h1 className='text-center text-3xl'>What I do</h1>
      <div className='mt-8 flex flex-col items-center justify-center gap-8 md:flex-row md:items-stretch lg:gap-12'>
        <Card
          className='w-[220px] flex-1 md:w-auto'
          icon={<BuildingWebsiteIcon height={80} width={80} />}
          title='Build website UI'
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur distinctio nisi consequatur ducimus voluptates eum repudiandae earum saepe laborum qui.'
        />
        <Card
          className='w-[220px] flex-1 md:w-auto'
          icon={<APIIcon height={80} width={80} />}
          title='Create API'
          description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati.'
        />
        <Card
          className='w-[220px] flex-1 md:w-auto'
          icon={<DatabaseIcon height={80} width={80} />}
          title='Design database'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, consequatur veniam. Itaque eligendi animi delectus. Optio nulla expedita asperiores perspiciatis doloribus mollitia officia veritatis, recusandae dolorem. Cumque ducimus similique molestiae!'
        />
      </div>
    </div>
  )
}
