'use client'

import { Image, NavLink } from '@/component'
import { MenuIcon } from '@/component/icon'
import { cx } from '@/helper'
import { useEffect, useState } from 'react'

const MenuButton = () => {
  const [openingSideMenu, setOpeningSideMenu] = useState<boolean>(false)

  useEffect(() => {
    const onScreenWidthChange = () => {
      if (document.body.offsetWidth >= 1024) {
        setOpeningSideMenu(false)
      }
    }
    window.addEventListener('resize', onScreenWidthChange)
    return () => {
      window.removeEventListener('resize', onScreenWidthChange)
    }
  }, [])

  return (
    <div className='select-none lg:hidden'>
      <MenuIcon className='cursor-pointer lg:hidden' onClick={() => setOpeningSideMenu(true)} />
      <div
        data-opening={openingSideMenu}
        className={cx(
          'fixed left-0 top-0 h-full w-full bg-[#00000088] transition-[visibility,opacity] duration-300 lg:hidden',
          'data-[opening=true]:visible data-[opening=true]:cursor-auto data-[opening=true]:opacity-100',
          'data-[opening=false]:invisible data-[opening=false]:cursor-none data-[opening=false]:opacity-0'
        )}
        onClick={() => setOpeningSideMenu(false)}
      >
        <div
          data-opening={openingSideMenu}
          className={cx(
            'relative flex h-full flex-col bg-neutral-900 text-lg text-white transition-[width,opacity] duration-300',
            'data-[opening=true]:w-[300px] data-[opening=true]:opacity-100',
            'data-[opening=false]:w-[0px] data-[opening=false]:opacity-0'
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className='flex cursor-default items-center px-4 py-4 md:px-8'>
            <Image
              className='mr-3 h-9 w-9 rounded-full'
              sizes='100%'
              src='/asset/image/logo-dark-60x60.png'
              alt='logo'
            />
            <span className='line-clamp-1 flex-1'>Ruong Nguyen Trong</span>
          </div>
          <NavLink
            className={cx('px-4 py-3 transition-colors duration-300 md:px-8', 'hover:bg-orange-500 hover:text-white')}
            href='/'
            label='Blog'
            onClick={() => {
              setOpeningSideMenu(false)
            }}
          />
          <NavLink
            className={cx('px-4 py-3 transition-colors duration-300 md:px-8', 'hover:bg-orange-500 hover:text-white')}
            href='/me'
            label='About'
            onClick={() => {
              setOpeningSideMenu(false)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default MenuButton
