'use client'
import { RateStatus } from '../../models/Rate'

const MAX_MOVES = 3
const MIN_MOVES = 0

export function getCurrentMove(searchParams: URLSearchParams) {
  const move = searchParams.get('move')
  if (!move) {
    return MIN_MOVES
  }
  if (parseInt(move) > MAX_MOVES) {
    return MIN_MOVES
  }
  return parseInt(move)
}

export function getInitRateStatus(searchParams: URLSearchParams) {
  const move = searchParams.get('move')
  if (!move) {
    return RateStatus.ACTUAL
  }
  if (parseInt(move) > MAX_MOVES) {
    return RateStatus.ACTUAL
  }
  if (parseInt(move) < MIN_MOVES) {
    return RateStatus.ACTUAL
  }
  return RateStatus.CALCULATED
}
