'use client'
import * as React from 'react'
import { NotionRenderer } from 'react-notion-x'
import { ExtendedRecordMap } from 'notion-types'
import 'react-notion-x/src/styles.css'
import dynamic from 'next/dynamic'
import { THEME, THEME_KEY } from '@/common'
import { useOnChangeTheme } from '@/hooks/use-on-change-theme'

const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code))
const Collection = dynamic(() => import('react-notion-x/build/third-party/collection').then((m) => m.Collection))
const Equation = dynamic(() => import('react-notion-x/build/third-party/equation').then((m) => m.Equation))
const Pdf = dynamic(() => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf), {
  ssr: false
})
const Modal = dynamic(() => import('react-notion-x/build/third-party/modal').then((m) => m.Modal), {
  ssr: false
})

type Props = {
  className?: string
  recordMap: ExtendedRecordMap
}

export function NotionPage({ className, recordMap }: Props) {
  const [isDark, setIsDark] = React.useState(false)
  React.useLayoutEffect(() => {
    const currentTheme: THEME = (localStorage.getItem(THEME_KEY) as THEME) || THEME.light
    if (currentTheme === THEME.dark) {
      setIsDark(true)
    }
  }, [])

  useOnChangeTheme((theme) => {
    if (theme === THEME.dark) {
      setIsDark(true)
      return
    }
    if (theme === THEME.light) {
      setIsDark(false)
      return
    }
  })

  return (
    <NotionRenderer
      className={className}
      recordMap={recordMap}
      fullPage
      darkMode={isDark}
      components={{
        Code,
        Collection,
        Equation,
        Modal,
        Pdf
      }}
    />
  )
}
