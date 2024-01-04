import styled, { css } from 'styled-components'

export const FormWrapper = styled.form`
  width: 100%;
  margin-top: -1.59375rem;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`

export const FieldsetWrapper = styled.fieldset`
  display: flex;
  width: 100%;
  border: 0;
  gap: 0.5rem;
`

export const BaseField = styled.input`
  border: 0;
  border-radius: 6px;

  background: ${(props) => props.theme['gray-600']};
  color: ${(props) => props.theme['gray-100']};

  padding: 1rem;

  &::selection {
    color: ${(props) => props.theme['gray-500']};
  }

  @media (max-width: 992px) {
    width: 100%;
    text-align: center;
  }
`

export const BaseButton = styled.button`
  border: 0;
  border-radius: 6px;

  background: ${(props) => props.theme['blue-300']};
  color: ${(props) => props.theme['gray-100']};

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['blue-500']};
  }

  &:disabled {
    background: ${(props) => props.theme['blue-500']};
    cursor: not-allowed;
  }

  @media (max-width: 992px) {
    width: 100%;
  }
`

interface SearchFieldProps {
  invalid: boolean
}

export const SearchField = styled(BaseField)<SearchFieldProps>`
  flex: 1;

  border: 1px solid ${(props) => props.theme['gray-950']};

  ${(props) =>
    props.invalid === true &&
    css`
      &:focus {
        box-shadow: 0 0 0 2px ${props.theme['red-300']};
      }
    `}
`

export const SearchButton = styled(BaseButton)`
  min-width: 9.1875rem;
`

export const ErrorMessage = styled.small`
  color: ${(props) => props.theme['red-300']};
`
