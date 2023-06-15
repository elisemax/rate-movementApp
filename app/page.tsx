'use client'
import React, { useContext, useEffect, useState } from 'react'
import { RateTable } from '../components/rateTable/RateTable'
import { Container } from '../components/container/Container'
import { Title } from '../components/title/Title'
import { RatesContext } from '../hooks/useRatesContext'
import { ColorSet } from '../utils/utils'
import { Rate, RateStatus } from '../models/Rate'
import { SwitchButton } from '../components/switchButton/SwitchButton'
import { useRouter, useSearchParams } from 'next/navigation'
import { getCurrentMove, getInitRateStatus } from './utils/utils'
import { useLocalStorage } from '../hooks/useLocalStorage'

export default function page() {
  const rates = useContext(RatesContext)
  const searchParams = useSearchParams()
  const router = useRouter()
  const [favoriteRates, setFavoriteRates] = useLocalStorage<Rate[]>('rates', [])
  const [rateStatus, setRateStatus] = useState<RateStatus>(getInitRateStatus(searchParams))
  const [currentMultiplier, setCurrentMultiplier] = useState(getCurrentMove(searchParams))

  useEffect(() => {
    if (favoriteRates.length === 0) return
    router.push(`/?move=${currentMultiplier}`)
  }, [favoriteRates])

  const handleFavorite = (rate: Rate) => {
    setFavoriteRates([...favoriteRates, rate])
  }

  const deleteFavorite = (rate: Rate) => {
    const newFavoriteRates = favoriteRates.filter(favoriteRate => favoriteRate !== rate)
    setFavoriteRates(newFavoriteRates)
  }

  const multiplers = [
    {
      name: 'Aktuální',
      onClick: () => {
        setRateStatus(RateStatus.ACTUAL)
        setCurrentMultiplier(0)
        router.push(`/?move=${0}`)
      }
    },
    {
      name: '+ 1 den',
      onClick: () => {
        setRateStatus(RateStatus.CALCULATED)
        setCurrentMultiplier(1)
        router.push(`/?move=${1}`)
      }
    },
    {
      name: '+ 2 dny',
      onClick: () => {
        setRateStatus(RateStatus.CALCULATED)
        setCurrentMultiplier(2)
        router.push(`/?move=${2}`)
      }
    },
    {
      name: '+ 3 dny',
      onClick: () => {
        setRateStatus(RateStatus.CALCULATED)
        setCurrentMultiplier(3)
        router.push(`/?move=${3}`)
      }
    }
  ]

  return (
    <>
      <Container>
        <Title title="Kurzovní lístek" />
        <Title title="Váše oblíbené" subtitle />
        <RateTable
          rates={favoriteRates}
          isFavoritesList
          onClick={deleteFavorite}
          multiple={currentMultiplier}
          rateStatus={rateStatus}
        />
      </Container>
      <Container colorSet={ColorSet.GRAY_LIGHT}>
        <Title title="Seznam všech kurzů" subtitle />
        <SwitchButton switchButtons={multiplers} initialValue={currentMultiplier} />
        <RateTable
          rates={rates}
          favoriteRates={favoriteRates}
          onClick={handleFavorite}
          multiple={currentMultiplier}
          rateStatus={rateStatus}
        />
      </Container>
    </>
  )
}
