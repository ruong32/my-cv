import { Container, NavLink } from '@/component'
import { cx } from '@/helper'
import dynamic from 'next/dynamic'
import ThemeChanger from './theme-changer'
import Link from 'next/link'
import { SearchBar } from './search-bar'

const MenuButton = dynamic(() => import('./menu-button'), {
  ssr: false
})

export const Header = () => {
  return (
    <div className={cx('fixed top-0 z-10 mx-auto w-full bg-slate-100', 'dark:bg-neutral-900')}>
      <Container className={cx('flex items-center justify-between py-4')}>
        <Link href='/'>
          <div className='h-9 w-9 bg-[url(/asset/image/logo-light-60x60.png)] bg-cover dark:bg-[url(/asset/image/logo-dark-60x60.png)]' />
        </Link>
        <div className='mx-5 w-full lg:mx-10'>
          <SearchBar />
        </div>
        <div className='flex items-center'>
          <div className='mr-5 hidden space-x-10 text-base lg:mr-10 lg:flex'>
            <NavLink href='/blog' label='Blog' />
            <NavLink href='/about' label='About' />
          </div>
          <ThemeChanger className='mr-5 lg:mr-0' />
          <MenuButton />
        </div>
      </Container>
    </div>
  )
}
