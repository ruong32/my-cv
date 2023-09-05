import { Container } from "@/component/atom"
import { cx } from "@/helper"
import Link from "next/link"
import { useI18nServer } from "@/hook/useI18nServer"
import dynamic from "next/dynamic"

const MenuButton = dynamic(() => import('./MenuButton'), {
    ssr: false
})

const LanguageChanger = dynamic(() => import('../LanguageChanger'), {
    ssr: false
})

const Header = () => {
    const [t] = useI18nServer('header')
    const LinkItem = ({href = '', name = ''}) => {
        return (
            <Link
                href={href}
            >
                {name}
            </Link>
        )
    }
    return (
        <div
            className={cx(
                'fixed top-0 w-full mx-auto bg-slate-100 z-10',
                'dark:bg-gray-900'
            )}
        >
            <Container
                className={cx(
                    'py-4 flex items-center justify-between'
                )}
            >
                <div className="h-[42px] w-[42px] bg-cover bg-[url(/asset/image/logo-light-60x60.png)] dark:bg-[url(/asset/image/logo-dark-60x60.png)]"></div>
                <div className="flex">
                    <div className="hidden text-lg gap-10 lg:flex">
                        <LinkItem href='' name={t('home')}/>
                        <LinkItem href='' name={t('about')}/>
                        <LinkItem href='' name={t('skills')}/>
                        <LinkItem href='' name={t('experiences')}/>
                        <LinkItem href='' name={t('contact')}/>
                    </div>
                    <LanguageChanger className="mr-4 lg:mr-0 lg:ml-12"/>
                    <MenuButton/>
                </div>
            </Container>
        </div>
    )
}

export default Header
