import { createContext } from 'react'
import type { IContextType } from './types'

export const GlobalContext = createContext<IContextType | undefined>(undefined)
