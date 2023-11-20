'use client'
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  FC,
  PropsWithChildren,
} from 'react'
import { createPortal } from 'react-dom'
import { Modal } from '~/components/Modal'

type Context = {
  isModalOpen: boolean
  openModal: (content: ReactNode) => void
  closeModal: () => void
}

const ModalContext = createContext({} as Context)

export const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState<ReactNode>(null)

  const openModal = (content: ReactNode) => {
    setModalContent(content)
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setModalContent(null)
    setIsModalOpen(false)
  }

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
      {isModalOpen
        ? createPortal(
            <Modal onClose={closeModal}>{modalContent}</Modal>,
            document.body,
          )
        : null}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)
