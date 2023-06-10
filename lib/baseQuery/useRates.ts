import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Rate } from '../../models/Rate'

export function useRates() {
  return useQuery(
    ['rates'],
    async () =>
      await axios.get(`/api/rates`).then(res => {
        return res.data as Rate[]
      })
  )
}
