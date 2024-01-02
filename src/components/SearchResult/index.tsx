import { useState } from 'react'
import { MapTrifold, Warning } from '@phosphor-icons/react'
import { ResultIconBox, ResultContent, ResultWrapper } from './styles'

export function SearchResult() {
  const [isValidResult, setIsValidResult] = useState(false)

  return (
    <ResultWrapper disabled={false}>
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
      <ResultContent isValid={isValidResult}>
        {isValidResult && (
          <>
            <header>
              <h2>00000-000</h2>
            </header>

            <div>
              <ul>
                <li>
                  <strong>Logradouro: </strong>
                </li>
                <li>
                  <strong>Bairro: </strong>
                </li>
                <li>
                  <strong>Município: </strong>
                </li>
                <li>
                  <strong>UF: </strong>
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
