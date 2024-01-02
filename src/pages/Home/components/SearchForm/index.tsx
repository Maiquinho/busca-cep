import { MagnifyingGlass } from '@phosphor-icons/react'
import { FormWrapper, SearchButton, SearchField } from './styles'

export function SearchForm() {
  return (
    <FormWrapper>
      <SearchField type="text" placeholder="Digite o CEP que deseja buscar" />
      <SearchButton>
        <MagnifyingGlass size={20} />
        Buscar
      </SearchButton>
    </FormWrapper>
  )
}
