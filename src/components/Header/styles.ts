import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  background: ${(props) => props.theme['gray-900']};

  padding: 7.25rem 0;

  min-height: 16.875rem;
`

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Navigation = styled.ul`
  & li {
    list-style-type: none;

    & a {
      display: block;
      line-height: 0;
      border-top: 2px solid transparent;
      border-bottom: 2px solid transparent;
      padding: 0.25rem 0;

      &:hover {
        border-bottom-color: ${(props) => props.theme['blue-300']};
      }

      & svg {
        fill: ${(props) => props.theme['blue-300']};
      }

      &:not(.active) {
        & svg {
          fill: ${(props) => props.theme['gray-100']};
        }
      }
    }
  }

  display: flex;
  align-items: center;
  gap: 0.5rem;
`
