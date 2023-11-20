import { Modal } from '~/components/Modal'

export default function ModalContent({ onClose }: { onClose: () => void }) {
  return (
    <Modal onClose={onClose}>
      <div>I&rsquo;m a modal dialog</div>
      <button className='rounded border px-2 py-1' onClick={onClose}>
        Close
      </button>
    </Modal>
  )
}
