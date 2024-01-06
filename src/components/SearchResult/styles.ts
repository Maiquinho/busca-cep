import styled, { css } from 'styled-components'

interface ResultWrapperProps {
  $disabled: number
}

export const ResultWrapper = styled.section<ResultWrapperProps>`
  background: ${(props) => props.theme['gray-700']};

  width: 100%;
  min-height: 15.9375rem;
  display: flex;

  margin-top: 7.625rem;

  overflow: hidden;

  border-radius: 6px;

  ${(props) =>
    props.$disabled
      ? css`
          opacity: 0.3;
          cursor: not-allowed;
        `
      : ''}
`

const variantColors = {
  warning: 'yellow-300',
} as const

interface ResultIconBoxProps {
  variant?: 'warning'
}

export const ResultIconBox = styled.div<ResultIconBoxProps>`
  min-width: 11.6875rem;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.variant
      ? css`
          background: ${props.theme[variantColors[props.variant]]};

          & svg {
            fill: ${(props) => props.theme['gray-900']};
          }
        `
      : css`
          background: ${props.theme['blue-300']};

          & svg {
            fill: ${(props) => props.theme['gray-100']};
          }
        `}
`

interface ResultContentProps {
  $valid: number
}

export const ResultContent = styled.div<ResultContentProps>`
  flex: 1;

  ${(props) =>
    props.$valid
      ? css`
          display: flex;
          flex-direction: column;
          justify-content: center;
        `
      : ''}

  padding: 2.5rem;

  header {
    margin-bottom: 0.5rem;

    & h2 {
      font-size: 2rem;
      line-height: 1.6;
      color: ${(props) => props.theme['gray-100']};
    }
  }

  ul {
    & li {
      list-style-type: none;

      & + li {
        margin-top: 0.5rem;
      }
    }
  }

  p {
    line-height: 1.6;
  }
`
