import { CHANGE_THEME_EVENT, THEME } from '@/common'

interface CustomEventMap {
  [CHANGE_THEME_EVENT]: CustomEvent<THEME>
}
declare global {
  interface Window {
    addEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEventMap[K]) => void
    ): void
    dispatchEvent<K extends keyof CustomEventMap>(ev: CustomEventMap[K]): void
    removeEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEventMap[K]) => void
    ): void
  }
}
export {}
