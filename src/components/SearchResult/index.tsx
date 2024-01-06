import { useContext } from 'react'
import { MapTrifold, Warning } from '@phosphor-icons/react'
import { ResultIconBox, ResultContent, ResultWrapper } from './styles'
import { AddressContext } from '../../contexts/AddressContext'

export function SearchResult() {
  const { activeAddress, isDisabled, isValidResult } =
    useContext(AddressContext)

  return (
    <ResultWrapper $disabled={+isDisabled}>
      {isValidResult && (
        <ResultIconBox>
          <MapTrifold size={44} />
        </ResultIconBox>
      )}
      {!isValidResult && (
        <ResultIconBox variant="warning">
          <Warning size={44} />
        </ResultIconBox>
      )}
      <ResultContent $valid={+isValidResult}>
        {isValidResult && (
          <>
            <header>
              <h2>{activeAddress?.cep ?? '00000-000'}</h2>
            </header>

            <div>
              <ul>
                <li>
                  <strong>Logradouro: </strong>
                  {activeAddress?.logradouro}
                </li>
                <li>
                  <strong>Bairro: </strong>
                  {activeAddress?.bairro}
                </li>
                <li>
                  <strong>Município: </strong>
                  {activeAddress?.localidade}
                </li>
                <li>
                  <strong>UF: </strong>
                  {activeAddress?.uf}
                </li>
              </ul>
            </div>
          </>
        )}

        {!isValidResult && (
          <>
            <header>
              <h2>CEP Inválido</h2>
            </header>

            <p>
              O CEP digitado não existe. <br />
              Verifique o número inserido e tente novamente!
            </p>
          </>
        )}
      </ResultContent>
    </ResultWrapper>
  )
}
