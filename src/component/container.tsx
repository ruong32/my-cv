import { cx } from '@/helper'
import React from 'react'

type ContainerProps = React.PropsWithChildren & {
  className?: string
}

export const Container = ({ className, children }: ContainerProps) => {
  return (
    <div
      className={cx(
        className,
        'w-full px-4 transition-[padding] duration-300 md:px-8 lg:mx-auto lg:max-w-[960px] lg:px-0'
      )}
    >
      {children}
    </div>
  )
}
