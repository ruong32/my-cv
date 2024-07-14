import React from 'react'

type SetStateFn<T> = (prevState?: T) => T

export const useControllableState = <T>(prop?: T, defaultProp?: T, onChange?: (value: T) => void) => {
  const [uncontrolledState, setUncontrolledState] = React.useState<T | undefined>(defaultProp)
  const isControlled = prop !== undefined
  const value = isControlled ? prop : uncontrolledState
  const uncontrolledValueRef = React.useRef<T>()

  const handleChange = React.useRef(onChange)
  React.useEffect(() => {
    handleChange.current = onChange
  })

  const setValue: React.Dispatch<React.SetStateAction<T | undefined>> = React.useCallback(
    (nextValue) => {
      if (isControlled) {
        const setter = nextValue as SetStateFn<T>
        const value = typeof nextValue === 'function' ? setter(prop) : nextValue
        if (value !== prop) handleChange.current?.(value as T)
      } else {
        setUncontrolledState(nextValue)
      }
    },
    [isControlled, prop]
  )

  React.useEffect(() => {
    if (uncontrolledValueRef.current !== uncontrolledState) {
      handleChange.current?.(uncontrolledState as T)
      uncontrolledValueRef.current = uncontrolledState
    }
  }, [uncontrolledState])

  return [value, setValue] as const
}
