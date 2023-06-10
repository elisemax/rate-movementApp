import styled from 'styled-components'
import { ColorSet, font } from '../../utils/utils'

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 20px;
`

export const TitleText = styled.h2<{ $subtile?: boolean }>`
  text-align: center;
  margin: 0 auto;
  ${props => (props.$subtile ? font(500, 18, 20, ColorSet.GRAY) : font(500, 24, 28, ColorSet.BLUE_PRIMARY))}
`
