import { cx } from '@/helper'
import React from 'react'

type CardProps = {
  icon?: React.ReactNode
  title: React.ReactNode
  subTitle?: React.ReactNode
  description?: React.ReactNode
  className?: string
  iconClassName?: string
  titleClassName?: string
  subtitleClassName?: string
  descriptionClassName?: string
  dir?: 'vertical' | 'horizontal'
}

export const Card = ({ dir = 'vertical', ...props }: CardProps) => {
  return (
    <div
      className={cx(
        'relative top-0 flex scale-100 rounded-lg bg-slate-300 p-4 transition-[inset,transform] duration-150',
        dir === 'vertical' ? 'flex-col items-center' : 'flex-row',
        'dark:bg-gray-700',
        'hover:top-[-5px] hover:scale-[1.025] hover:shadow-[0_0_4px_#00000066]',
        props.className
      )}
    >
      {dir === 'vertical' ? (
        <>
          <div className={props.iconClassName}>{props.icon}</div>
          <h3 className={cx('mt-2 text-center text-xl', props.titleClassName)}>{props.title}</h3>
          {props.subTitle && <h4 className={cx('mt-2 text-sm', props.subtitleClassName)}>{props.subTitle}</h4>}
          {props.description && (
            <div className={cx('mt-2 text-sm', props.descriptionClassName)}>{props.description}</div>
          )}
        </>
      ) : (
        <>
          <div className={cx('mr-6', props.iconClassName)}>{props.icon}</div>
          <div>
            <h3 className={cx('text-xl', props.titleClassName)}>{props.title}</h3>
            {props.subTitle && <h4 className={cx('mt-2 text-sm', props.subtitleClassName)}>{props.subTitle}</h4>}
            {props.description && (
              <div className={cx('mt-2 text-sm', props.descriptionClassName)}>{props.description}</div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
