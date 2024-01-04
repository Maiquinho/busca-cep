import styled from 'styled-components'

export const HistoryWrapper = styled.main`
  min-height: 80vh;
`

export const HistoryTitle = styled.section`
  margin-top: 5rem;

  & h2 {
    color: ${(props) => props.theme['gray-100']};
  }
`

export const HistoryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;

  margin-top: 2.5rem;

  & th {
    background-color: ${(props) => props.theme['gray-600']};
    padding: 1rem;
    text-align: left;
    color: ${(props) => props.theme['gray-100']};
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      border-top-left-radius: 8px;
      padding-left: 1.5rem;
    }
    &:last-child {
      border-top-right-radius: 8px;
      padding-right: 1.5rem;
    }
  }

  & td {
    background: ${(props) => props.theme['gray-700']};
    border-top: 4px solid ${(props) => props.theme['gray-800']};
    padding: 1rem;
    font-size: 0.875rem;
    line-height: 1.6;
  }

  & tr {
    & td {
      &:first-child {
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }

    &:last-child {
      & td {
        &:first-child {
          border-bottom-left-radius: 8px;
        }
        &:last-child {
          border-bottom-right-radius: 8px;
        }
      }
    }
  }
`
