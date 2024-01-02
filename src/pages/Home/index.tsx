import { HomeWrapper } from './styles'
import { Container } from '../../components/Container/styles'
import { SearchResult } from '../../components/SearchResult'
import { SearchForm } from './components/SearchForm'

export function Home() {
  return (
    <HomeWrapper>
      <Container>
        <SearchForm />
        <SearchResult />
      </Container>
    </HomeWrapper>
  )
}
