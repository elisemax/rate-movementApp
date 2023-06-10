'use client'
import React from 'react'
import { useRates } from '../../lib/baseQuery/useRates'
import { RatesContext } from '../../hooks/useRatesContext'

export function RatesContextProvider({ children }: { children: React.ReactNode }) {
  const { data, isLoading, error } = useRates()

  isLoading && <div>Loading...</div>
  error && <div>Error</div>

  return <RatesContext.Provider value={data}>{children}</RatesContext.Provider>
}
