 
// app/page.tsx
'use client';

import React, { useState } from 'react';
import Modal from '../components/Modal';

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-6">
      <h1 className="text-2xl">Welcome to Next.js App Routing!</h1>
      <button
        onClick={openModal}
        className="bg-blue-500 text-white p-2 mt-4 rounded"
      >
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl">This is a modal</h2>
        <p className="mt-4">You can add any content here.</p>
      </Modal>
    </div>
  );
};

export default HomePage;
