import styled from 'styled-components'
import { ColorSet, font } from '../../utils/utils'

export const SwitchButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`

export const SwitchButton = styled.button<{ $active?: boolean; $isFirst: boolean }>`
  cursor: pointer;
  width: 80px;
  padding: 10px 8px;
  ${props => (props.$active ? font(500, 14, 16, ColorSet.WHITE) : font(500, 14, 16, ColorSet.BLUE_PRIMARY))};
  background-color: ${props => (props.$active ? ColorSet.BLUE_PRIMARY : ColorSet.WHITE)};
  border: ${ColorSet.BLUE_PRIMARY} 2px solid;
  border-left: ${props => (props.$isFirst ? `${ColorSet.BLUE_PRIMARY} 2px solid` : 'none')};
`
