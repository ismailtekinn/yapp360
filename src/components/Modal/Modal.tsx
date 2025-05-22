type City = { id: number; name: string } | null;
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  city : City| null;
  children: React.ReactNode;
};

export function Modal({ isOpen, onClose,city, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-70 flex justify-center items-center z-1150 p-6">
      <div
        className="bg-white rounded-sm p-8 max-w-7xl w-full max-h-[150vh] overflow-auto relative "
        style={{ minWidth: "900px", minHeight: "600px",  maxHeight: "80vh",   
      overflowY: "auto",   }}
      >
        <h2 className="absolute top-4 left-6 text-xl font-semibold text-gray-900">
          {city?.name} İli Detay Bilgileri
        </h2>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-black text-2xl font-bold"
          aria-label="Kapat"
        >
          ✕
        </button>

        <div className="text-gray-900 text-lg leading-relaxed mt-10">
          {children}
        </div>
      </div>
    </div>
  );
}