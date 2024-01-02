import { NavLink } from 'react-router-dom'

import { Container } from '../Container/styles'
import { HeaderNav, HeaderWrapper, Navigation } from './styles'

import { ClockCounterClockwise, MagnifyingGlass } from '@phosphor-icons/react'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderNav>
          <img src={logo} alt="lupa de busca com texto indicativo: busca cep" />

          <Navigation>
            <li>
              <NavLink to="/">
                <MagnifyingGlass size={32} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/history">
                <ClockCounterClockwise size={32} />
              </NavLink>
            </li>
          </Navigation>
        </HeaderNav>
      </Container>
    </HeaderWrapper>
  )
}
