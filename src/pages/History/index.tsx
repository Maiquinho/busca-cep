import { Container } from '../../components/Container/styles'
import { HistoryTable, HistoryTitle, HistoryWrapper } from './styles'

export function History() {
  return (
    <HistoryWrapper>
      <Container>
        <HistoryTitle>
          <h2>Ultimas buscas</h2>
        </HistoryTitle>
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
            <tr>
              <td>07143-222</td>
              <td>Rua Miguel Fernandes Maldonado</td>
              <td>Guarulhos</td>
              <td>SP</td>
            </tr>
            <tr>
              <td>07152-824</td>
              <td>Rua Araci de Almeida</td>
              <td>Guarulhos</td>
              <td>SP</td>
            </tr>
            <tr>
              <td>35160-001</td>
              <td>Praça José Júlio da Costa</td>
              <td>Ipatinga</td>
              <td>MG</td>
            </tr>
          </tbody>
        </HistoryTable>
      </Container>
    </HistoryWrapper>
  )
}
