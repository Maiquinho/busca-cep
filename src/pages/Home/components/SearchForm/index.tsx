import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { MagnifyingGlass } from '@phosphor-icons/react'
import {
  ErrorMessage,
  FieldsetWrapper,
  FormWrapper,
  SearchButton,
  SearchField,
} from './styles'
import { AddressContext } from '../../../../contexts/AddressContext'
import { useContext } from 'react'

const formSchema = z.object({
  zipCode: z.string().min(9, 'Informe um CEP válido!'),
})

type FormProps = z.infer<typeof formSchema>

export function SearchForm() {
  const { searchAddress } = useContext(AddressContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues: {
      zipCode: '',
    },
  })

  const zipCode = watch('zipCode')

  function handleSearchForm() {
    searchAddress(zipCode)

    reset()
  }

  return (
    <FormWrapper onSubmit={handleSubmit(handleSearchForm)}>
      <FieldsetWrapper>
        <SearchField
          type="search"
          placeholder="Digite o CEP que deseja buscar"
          {...register('zipCode', { required: true })}
          maxLength={9}
          invalid={!!errors.zipCode?.message}
        />
        <SearchButton>
          <MagnifyingGlass size={20} />
          Buscar
        </SearchButton>
      </FieldsetWrapper>
      {errors.zipCode?.message && (
        <ErrorMessage>{errors.zipCode?.message}</ErrorMessage>
      )}
    </FormWrapper>
  )
}
