import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  padding: 1rem 0;

  text-align: center;

  & a {
    color: ${(props) => props.theme['gray-100']};
    text-decoration: none;
  }
`
