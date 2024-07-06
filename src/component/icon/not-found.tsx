import { SVGProps } from 'react'

export const NotFoundIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' {...props}>
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m2 2.207l20 19.794M6.562 2.515c2.006-.602 7.754-.723 11.162-.118c.825.147 1.62.679 2.054 1.385c.726 1.183.687 2.56.687 3.942l-.12 8.455M4 4.172c-.632 2.267-.547 6.428-.506 12.57c.006.79.043 1.59.281 2.345c.369 1.17.983 1.88 2.332 2.45c.575.244 1.206.324 1.833.324h4.043c3.796-.092 5.328-.488 7.006-2.678m-8.502 2.678c2.381-1.207 3.608-1.375 3.296-4.411c-.06-.786.39-1.725 1.194-1.977m5.428-3.428c-.243 1.436-.406 1.97-1.375 2.801'
        color='currentColor'
      />
    </svg>
  )
}
