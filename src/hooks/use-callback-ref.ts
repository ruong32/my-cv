import React from 'react'

type GenericFn = (...args: any[]) => any

export const useCallbackRef = (cb: GenericFn) => {
  const callbackRef = React.useRef<GenericFn>()
  callbackRef.current = cb
  return React.useCallback<GenericFn>((...args) => {
    callbackRef.current?.(...args)
  }, [])
}
