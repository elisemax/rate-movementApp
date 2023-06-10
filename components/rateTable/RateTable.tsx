'use client'
import React from 'react'
import * as Styled from './RateTable.styled'
import { Rate, RateStatus } from '../../models/Rate'

type Props = {
  rates?: Rate[]
  isFavoritesList?: boolean
  favoriteRates?: Rate[]
  rateStatus?: RateStatus
  onClick?: (rate: Rate) => void
  multiple: number
}

export function RateTable({ rates, isFavoritesList, onClick, favoriteRates, multiple, rateStatus }: Props) {
  if (rates?.length === 0) return null

  const getRateTableButton = (rate: Rate) => {
    if (isFavoritesList) {
      return <Styled.RateTableButton onClick={() => onClick && onClick(rate)}>Zrušit</Styled.RateTableButton>
    }
    return favoriteRates?.includes(rate) ? (
      <Styled.RateTableBodyItem />
    ) : (
      <Styled.RateTableButton onClick={() => onClick && onClick(rate)}>Oblíbená</Styled.RateTableButton>
    )
  }

  return (
    <>
      <Styled.RateTableWrapperHeader>
        <Styled.RateTableHeader>
          <Styled.RateTableTitle>Měna</Styled.RateTableTitle>
          <Styled.RateTableTitle>Země</Styled.RateTableTitle>
          <Styled.RateTableTitle>Nákup</Styled.RateTableTitle>
          <Styled.RateTableTitle>Prodej</Styled.RateTableTitle>
          <Styled.RateTableTitle>ČNB</Styled.RateTableTitle>
          <Styled.RateTableTitle>Změna/1 den</Styled.RateTableTitle>
          <Styled.RateTableTitle></Styled.RateTableTitle>
        </Styled.RateTableHeader>
      </Styled.RateTableWrapperHeader>
      {rates &&
        rates.map(rate => (
          <Styled.RateTableWrapper key={rate.shortName}>
            <Styled.RateTableBody>
              <Styled.RateTableBodyItem>
                {rate.shortName} {rate.name}
              </Styled.RateTableBodyItem>
              <Styled.RateTableBodyItem>{rate.country}</Styled.RateTableBodyItem>
              <Styled.RateTableBodyItem>
                {rateStatus === RateStatus.ACTUAL ? rate.buy.toFixed(3) : (rate.buy + multiple * rate.move).toFixed(3)}
              </Styled.RateTableBodyItem>
              <Styled.RateTableBodyItem>
                {rateStatus === RateStatus.ACTUAL
                  ? rate.sell.toFixed(3)
                  : (rate.sell + multiple * rate.move).toFixed(3)}
              </Styled.RateTableBodyItem>
              <Styled.RateTableBodyItem>
                {rateStatus === RateStatus.ACTUAL ? rate.cnb.toFixed(3) : (rate.cnb + multiple * rate.move).toFixed(3)}
              </Styled.RateTableBodyItem>
              <Styled.RateTableBodyItem $move={rate.move}>{rate.move}</Styled.RateTableBodyItem>
              {getRateTableButton(rate)}
            </Styled.RateTableBody>
          </Styled.RateTableWrapper>
        ))}
    </>
  )
}
