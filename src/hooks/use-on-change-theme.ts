import { CHANGE_THEME_EVENT, THEME } from '@/common'
import React from 'react'
import { useCallbackRef } from './use-callback-ref'

export const useOnChangeTheme = (cb: (theme: THEME) => void) => {
  const cbRef = useCallbackRef(cb)
  React.useEffect(() => {
    const onChangeTheme = (e: CustomEvent<THEME>) => cbRef(e.detail)
    window.addEventListener(CHANGE_THEME_EVENT, onChangeTheme)
    return () => {
      window.removeEventListener(CHANGE_THEME_EVENT, onChangeTheme)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
