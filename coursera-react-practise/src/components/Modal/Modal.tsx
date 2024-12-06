interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors z-20 ${
        isOpen ? "visible bg-black/75" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-zinc-400 rounded-lg shadow  p-6 transition-all ${
          isOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        button
        {children}
      </div>
    </div>
  );
};

export default Modal;
