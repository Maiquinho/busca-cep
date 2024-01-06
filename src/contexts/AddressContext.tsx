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
  address: Address[]
  activeAddress: Address | undefined
  isDisabled: boolean
  isValidResult: boolean
  searchAddress: (zipCode: string) => Promise<void>
}

interface AddressProviderProps {
  children: ReactNode
}

export const AddressContext = createContext({} as AddressContextType)

export function AddressProvider({ children }: AddressProviderProps) {
  const [address, setAddress] = useState<Address[]>(() => {
    const storedAddress = localStorage.getItem('@busca-cep:address-state-1.0.0')
    const lastSearchedAddress = storedAddress ? JSON.parse(storedAddress) : []

    return lastSearchedAddress
  })
  const [activeAddressId, setActiveAddressId] = useState<string | null>(null)
  const [isDisabled, setIsDisabled] = useState(true)
  const [isValidResult, setIsValidResult] = useState(true)

  const activeAddress = address.find((item) => item.cep === activeAddressId)

  async function searchAddress(zipCode?: string) {
    if (zipCode) {
      const response = await api.get(`/${zipCode}/json/`)

      if (response.data?.erro === true) {
        setIsValidResult(false)
        setIsDisabled(false)

        return
      }

      const fetchedAddress: Address = response?.data

      setAddress((prevState) => [fetchedAddress, ...prevState])
      setActiveAddressId(fetchedAddress.cep)
      setIsDisabled(false)
      setIsValidResult(true)
    }
  }

  useEffect(() => {
    searchAddress()
  }, [])

  useEffect(() => {
    const addressToJSON = JSON.stringify(address)

    localStorage.setItem('@busca-cep:address-state-1.0.0', addressToJSON)
  }, [address])

  return (
    <AddressContext.Provider
      value={{
        address,
        activeAddress,
        isDisabled,
        isValidResult,
        searchAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  )
}
