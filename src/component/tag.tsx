import { cx } from '@/helper'
import React from 'react'

type TagProps = React.PropsWithChildren & {
  className?: string
}

export const Tag = ({ className, children }: TagProps) => {
  return <div className={cx('rounded-xl border-[1px] border-orange-500 px-2 py-1 text-sm', className)}>{children}</div>
}
