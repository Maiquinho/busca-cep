import styled from 'styled-components'

export const Container = styled.div`
  max-width: 46rem;
  margin: 0 auto;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: calc(100% - 1rem);
  }
`
