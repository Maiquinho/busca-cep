import { useContext } from 'react'
import { Container } from '../../components/Container/styles'
import { AddressContext } from '../../contexts/AddressContext'
import { HistoryTable, HistoryTitle, HistoryWrapper } from './styles'
import { EmptyHistory } from './components/EmptyHistory'

export function History() {
  const { address } = useContext(AddressContext)

  return (
    <HistoryWrapper>
      <Container>
        <HistoryTitle>
          <h2>Ultimas buscas</h2>
        </HistoryTitle>

        {address.length > 0 && (
          <HistoryTable>
            <thead>
              <tr>
                <th>CEP</th>
                <th>Logradouro</th>
                <th>Município</th>
                <th>UF</th>
              </tr>
            </thead>
            <tbody>
              {address.map((item) => (
                <tr key={String(new Date())}>
                  <td>{item.cep}</td>
                  <td>{item.logradouro}</td>
                  <td>{item.localidade}</td>
                  <td>{item.uf}</td>
                </tr>
              ))}
            </tbody>
          </HistoryTable>
        )}
        {address.length < 1 && <EmptyHistory />}
      </Container>
    </HistoryWrapper>
  )
}
