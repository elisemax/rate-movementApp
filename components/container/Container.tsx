'use client'
import React from 'react'
import * as Styled from './Container.styled'
import { ColorSet } from '../../utils/utils'

export function Container({ children, colorSet }: { children: React.ReactNode; colorSet?: ColorSet }) {
  return <Styled.ContainerWrapper $colorSet={colorSet}>{children}</Styled.ContainerWrapper>
}
