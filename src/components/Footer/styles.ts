import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  text-align: center;

  & a {
    color: ${(props) => props.theme['gray-100']};
    text-decoration: none;
  }
`
