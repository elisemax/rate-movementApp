import styled from 'styled-components'
import { ColorSet } from '../../utils/utils'

export const ContainerWrapper = styled.div<{ $colorSet?: ColorSet }>`
  margin-top: 20px;
  padding-left: 60px;
  padding-right: 60px;
  background-color: ${props => props.$colorSet || ColorSet.WHITE};
`
