import { Button, Image, Tag } from "@/component/atom"
import { useI18n } from "@/hook/useI18n"
import { Download, Documentation } from "@/component/icon"
import { Link } from "react-router-dom"

const About = () => {
    const [t] = useI18n('home')

    return (
        <div className="flex flex-col py-6 md:flex-row md:py-12 lg:py-20">
            <Image className="w-full md:flex-1" src='/asset/image/programmer.png' alt='about' />
            <div className="mt-8 md:flex-1 md:mt-0 md:ml-4">
                <h1 className="text-3xl text-center md:text-left">{t('aboutMe')}</h1>
                <div className="mt-6 text-sm font-light text-center md:text-left">{t('aboutMeDesc')}</div>
                <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
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
                <div className="flex space-x-2 justify-center md:justify-start">
                    <Link to="asset/Nguyen Trong Ruong.pdf" target="_blank" download>
                        <Button
                            className="mx-auto mt-6 md:mx-0"
                            leftIcon={<Download className="mr-2" />}
                        >
                            Download CV
                        </Button>
                    </Link>
                    <Link to="asset/cv.html" target="_blank">
                        <Button
                            color='green'
                            className="mx-auto mt-6 md:mx-0"
                            leftIcon={<Documentation className="mr-2" />}
                        >
                            View CV
                        </Button>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default About
