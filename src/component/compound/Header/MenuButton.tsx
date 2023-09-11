import { Image } from "@/component/atom"
import { Menu } from "@/component/icon"
import { cx } from "@/helper"
import { useI18n } from "@/hook/useI18n"
import { useEffect, useMemo, useState } from "react"

const MenuButton = () => {
    const [openingSideMenu, setOpeningSideMenu] = useState<boolean>(false)
    const [t] = useI18n('header')

    const linkItemStyle = useMemo(() => cx(
        'px-4 py-3 transition-colors duration-300',
        'hover:bg-orange-500'
    ), [])

    const LinkItem = ({name = '', href = ''}) => {
        return (
            <a
                className={linkItemStyle}
                onClick={() => {
                    setOpeningSideMenu(false)
                }}
                href={href}
            >
                {name}
            </a>
        )
    }

    useEffect(() => {
        const onScreenWidthChange = () => {
            if (document.body.offsetWidth <= 1024) {
                setOpeningSideMenu(false)
            }
        }
        window.addEventListener('resize', onScreenWidthChange)
        return () => {
            window.removeEventListener('resize', onScreenWidthChange)
        }
    }, [])

    return (
        <>
            <Menu className='cursor-pointer lg:hidden' onClick={() => setOpeningSideMenu(true)}/>
            <div
                data-opening={openingSideMenu}
                className={cx(
                    "fixed top-0 left-0 h-full w-full bg-[#00000088] transition-[visibility,opacity] duration-300 lg:hidden",
                    'data-[opening=true]:visible data-[opening=true]:opacity-100 data-[opening=true]:cursor-auto',
                    'data-[opening=false]:invisible data-[opening=false]:opacity-0 data-[opening=false]:cursor-none'
                )}
                onClick={() => setOpeningSideMenu(false)}
            >
                <div 
                    data-opening={openingSideMenu} 
                    className={cx(
                        "relative h-full bg-orange-600 flex flex-col text-lg transition-[width,opacity] duration-300 text-white",
                        'data-[opening=true]:w-[300px] data-[opening=true]:opacity-100',
                        'data-[opening=false]:w-[0px] data-[opening=false]:opacity-0'
                    )}
                    onClick={e => e.stopPropagation()}
                >
                    <div className="flex items-center px-4 py-3 cursor-default">
                        <Image className='h-[42px] w-[42px] rounded-full mr-3' sizes="100%" src='/asset/image/logo-dark-60x60.png' alt='logo'/>
                        <span className='flex-1 line-clamp-1'>{t('fullName')}</span>
                    </div>
                    <LinkItem href='' name={t('home')}/>
                    <LinkItem href='' name={t('about')}/>
                    <LinkItem href='' name={t('skills')}/>
                    <LinkItem href='' name={t('experiences')}/>
                    <LinkItem href='' name={t('contact')}/>
                </div>
            </div>
        </>
    )
}

export default MenuButton
