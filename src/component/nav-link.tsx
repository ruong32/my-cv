'use client'

import React from 'react'
import { cx } from '@/helper'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinkProps = React.ComponentProps<typeof Link> & {
  label: React.ReactNode
  activeClassName?: string
}

export const NavLink = ({ label, className, activeClassName = 'text-orange-500', ...props }: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === props.href
  return (
    <Link className={cx('cursor', className, isActive && activeClassName)} {...props}>
      {label}
    </Link>
  )
}
