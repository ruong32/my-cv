import { Card } from "@/component/atom"
import { API, BuildingWebsite, Database } from "@/component/icon"
import { useI18nServer } from "@/hook/useI18nServer"

const WhatIDo = () => {
    const [t] = useI18nServer('home')
    
    return (
        <div className="py-6 md:py-12 lg:py-20">
            <h1 className="text-3xl text-center">{t('whatIDo')}</h1>
            <div className="mt-8 flex flex-col justify-center items-center gap-8 md:flex-row md:items-stretch lg:gap-12">
                <Card
                    className="flex-1 w-[220px] md:w-auto"
                    icon={<BuildingWebsite height={80} width={80}/>}
                    title="Build website UI"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur distinctio nisi consequatur ducimus voluptates eum repudiandae earum saepe laborum qui."
                />
                <Card
                    className="flex-1 w-[220px] md:w-auto"
                    icon={<API height={80} width={80}/>}
                    title="Create API"
                    description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati."
                />
                <Card
                    className="flex-1 w-[220px] md:w-auto"
                    icon={<Database height={80} width={80}/>}
                    title="Design database"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, consequatur veniam. Itaque eligendi animi delectus. Optio nulla expedita asperiores perspiciatis doloribus mollitia officia veritatis, recusandae dolorem. Cumque ducimus similique molestiae!"
                />
            </div>
        </div>
    )
}

export default WhatIDo
