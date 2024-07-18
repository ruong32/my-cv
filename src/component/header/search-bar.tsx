'use client'

import { twMerge } from 'tailwind-merge'
import { CrossIcon, MagnifyingGlassIcon } from '../icon'

export const SearchBar = () => {
  return (
    <label
      className={twMerge(
        'relative ml-auto flex h-9 w-9 cursor-pointer items-center overflow-hidden rounded-[36px] bg-slate-50 transition-all duration-300',
        '[&:hover>svg:first-of-type]:text-orange-500',
        'focus-within:w-full focus-within:rounded-lg [&:focus-within>svg:first-of-type]:text-orange-500',
        'dark:bg-neutral-800'
      )}
      onMouseDown={(e) => e.preventDefault()}
    >
      <MagnifyingGlassIcon className='h-9 w-9 shrink-0 p-2 transition-colors' />
      <input
        className='h-full w-full bg-inherit text-sm outline-none [&:invalid~svg]:hidden'
        placeholder='Search posts'
        required
      />
      <CrossIcon className='h-9 w-9 shrink-0 p-2 transition-colors hover:text-red-500' />
    </label>
  )
}
