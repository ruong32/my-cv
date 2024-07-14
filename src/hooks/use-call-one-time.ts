import React from 'react'

export const useCallOneTime = (callback: () => void) => {
  const isExecuted = React.useRef(false)
  if (!isExecuted.current) {
    isExecuted.current = true
    callback?.()
  }
}
