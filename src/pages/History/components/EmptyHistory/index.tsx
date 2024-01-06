import { ReceiptX } from '@phosphor-icons/react'
import { EmptyHistoryMessage } from './styles'

export function EmptyHistory() {
  return (
    <EmptyHistoryMessage>
      <ReceiptX size={24} /> Ops, histórico vazio
    </EmptyHistoryMessage>
  )
}
