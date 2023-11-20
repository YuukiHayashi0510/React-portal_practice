'use client'

import { useModal } from '~/providers/ModalProvider'
import ModalContent from './components/ModalContent'

export default function Home() {
  const { openModal, closeModal } = useModal()

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <button
        className='rounded border bg-white px-3 py-1'
        onClick={() => openModal(<ModalContent onClose={closeModal} />)}
      >
        モーダルを開く
      </button>
    </main>
  )
}
