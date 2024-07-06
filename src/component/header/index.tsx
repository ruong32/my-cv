import { Container, NavLink } from '@/component'
import { cx } from '@/helper'
import dynamic from 'next/dynamic'
import ThemeChanger from './theme-changer'

const MenuButton = dynamic(() => import('./menu-button'), {
  ssr: false
})

export const Header = () => {
  return (
    <div className={cx('fixed top-0 z-10 mx-auto w-full bg-slate-100', 'dark:bg-neutral-900')}>
      <Container className={cx('flex items-center justify-between py-4')}>
        <div className='h-9 w-9 bg-[url(/asset/image/logo-light-60x60.png)] bg-cover dark:bg-[url(/asset/image/logo-dark-60x60.png)]'></div>
        <div className='flex items-center space-x-5 lg:space-x-10'>
          <div className='hidden space-x-10 text-base lg:flex'>
            <NavLink href='/' label='Blog' />
            <NavLink href='/me' label='About' />
          </div>
          <ThemeChanger />
          <MenuButton />
        </div>
      </Container>
    </div>
  )
}
