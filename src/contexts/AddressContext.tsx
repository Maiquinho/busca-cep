import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Address {
  cep: string
  logradouro: string
  bairro: string
  localidade: string
  uf: string
}

interface AddressContextType {
  address: Address
  isDisabled: boolean
  isValidResult: boolean
  searchAddress: (zipCode: string) => Promise<void>
}

interface AddressProviderProps {
  children: ReactNode
}

export const AddressContext = createContext({} as AddressContextType)

export function AddressProvider({ children }: AddressProviderProps) {
  const [address, setAddress] = useState<Address>({
    cep: '00000-000',
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: '',
  })
  const [isDisabled, setIsDisabled] = useState(true)
  const [isValidResult, setIsValidResult] = useState(true)

  async function searchAddress(zipCode?: string) {
    const response = await api.get(`/${zipCode}/json/`)

    if (response.data?.erro === true) {
      setIsValidResult(false)
      setIsDisabled(false)

      return
    }

    const fetchedAddress: Address = response?.data

    setAddress(fetchedAddress)
    setIsDisabled(false)
    setIsValidResult(true)
  }

  useEffect(() => {
    searchAddress()
  }, [])

  return (
    <AddressContext.Provider
      value={{
        address,
        isDisabled,
        isValidResult,
        searchAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  )
}
