'use client';

import React from 'react';
import Portal from './portal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        onClick={onClose}
      >
        <div
          className="relative mx-4 max-w-md w-full rounded-md bg-white p-5 shadow-md"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-3 top-3 text-2xl font-semibold text-gray-500 hover:text-gray-700"
            aria-label="Cerrar modal"
          >
            &times;
          </button>

          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;