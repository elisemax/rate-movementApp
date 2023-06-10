import React from 'react'
import * as Styled from './Title.styled'

type Props = {
  title: string
  subtitle?: boolean
}

export function Title({ subtitle, title }: Props) {
  return (
    <Styled.TitleWrapper>
      <Styled.TitleText $subtile={subtitle}>{title}</Styled.TitleText>
    </Styled.TitleWrapper>
  )
}
