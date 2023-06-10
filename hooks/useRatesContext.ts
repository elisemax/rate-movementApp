import { createContext, useContext } from 'react'
import { Rate } from '../models/Rate'

export const RatesContext = createContext<Rate[] | undefined>(undefined)

export function useRatesContext() {
  const context = useContext(RatesContext)
  if (!context) {
    throw new Error('RatesContext is missing in component tree. Make sure you use the RatesContext.Provide')
  }
  return context
}
