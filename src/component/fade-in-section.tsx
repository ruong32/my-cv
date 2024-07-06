'use client'

import { cx } from '@/helper'
import { useRef, PropsWithChildren, useState, useEffect, useMemo } from 'react'

type FadeInSectionProps = PropsWithChildren

export const FadeInSection = ({ children }: FadeInSectionProps) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    if (!divRef.current) {
      return
    }
    const observer = new IntersectionObserver((entries, _observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(entry.isIntersecting)
          _observer.unobserve(entry.target)
        }
      })
    })
    observer.observe(divRef.current)
    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={divRef}
      className={cx(
        'relative',
        isVisible ? 'visible animate-[0.75s_ease-out_0.25s_backwards_fade-in-up]' : 'invisible'
      )}
    >
      {children}
    </div>
  )
}
