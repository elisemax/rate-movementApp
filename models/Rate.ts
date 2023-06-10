export type Rate = {
  shortName: string
  name: string
  country: string
  move: number
  buy: number
  sell: number
  cnb: number
}

export enum RateStatus {
  ACTUAL = 'ACTUAL',
  CALCULATED = 'CALCULATED'
}
