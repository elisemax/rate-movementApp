import styled from 'styled-components'
import { ColorSet, font } from '../../utils/utils'

export const RateTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border: 1px solid ${ColorSet.GRAY}};
  background-color: ${ColorSet.BLUE_SECONDARY};
  margin-bottom: 10px;
`

export const RateTableWrapperHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-top: 40px;
`

export const RateTableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const RateTableTitle = styled.div`
  ${font(500, 14, 16, ColorSet.BLUE_PRIMARY)}
  text-align: center;
  width: 90px;
  margin: 0 auto;
`

export const RateTableBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const RateTableBodyItem = styled.div<{ $move?: number }>`
  ${props =>
    props.$move ? font(500, 14, 16, props.$move > 0 ? ColorSet.GREEN : ColorSet.RED) : font(500, 14, 16, ColorSet.GRAY)}
  width: 90px;
  text-align: center;
  margin: 0 auto;
`

export const RateTableButton = styled.button`
  ${font(500, 14, 16, ColorSet.GRAY)}
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 90px;
  margin: 0 auto;
  text-decoration: underline;
`
