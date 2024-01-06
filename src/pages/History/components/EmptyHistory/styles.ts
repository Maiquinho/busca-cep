import styled from 'styled-components'

export const EmptyHistoryMessage = styled.span`
  padding: 1rem;

  background-color: ${(props) => props.theme['gray-700']};
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  margin-top: 2.5rem;

  & svg {
    color: ${(props) => props.theme['yellow-300']};
  }
`
