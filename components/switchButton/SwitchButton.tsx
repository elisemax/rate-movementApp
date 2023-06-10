'use client'
import React, { useState } from 'react'
import * as Styled from './SwitchButton.styled'

type SwitchButton = {
  name: string
  onClick: () => void
}

type Props = {
  switchButtons: SwitchButton[]
  initialValue?: number
}

export function SwitchButton({ switchButtons, initialValue }: Props) {
  const [indexChoosen, setIndexOfChoosen] = useState(initialValue || 0)
  return (
    <Styled.SwitchButtonWrapper>
      {switchButtons.map(switchButton => (
        <Styled.SwitchButton
          key={switchButton.name}
          $active={switchButtons.indexOf(switchButton) === indexChoosen}
          onClick={() => {
            switchButton.onClick()
            setIndexOfChoosen(switchButtons.indexOf(switchButton))
          }}
          $isFirst={switchButtons.indexOf(switchButton) === 0}
        >
          {switchButton.name}
        </Styled.SwitchButton>
      ))}
    </Styled.SwitchButtonWrapper>
  )
}
