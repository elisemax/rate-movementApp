'use client'
import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RatesContextProvider } from './context/RatesContext'

const queryClient = new QueryClient()
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <RatesContextProvider>{children}</RatesContextProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
