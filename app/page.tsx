"use client"; 
import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export default function Home() {
 
  const [playing, setPlaying] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
     
      {playing ? (
        <div style={{ textAlign: 'center' }}>
          <FaPause size={50} color="green" />
          <p>Executando</p>
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <FaPlay size={50} color="red" />
          <p>Pausado</p>
        </div>
      )}

      <button onClick={() => setPlaying(!playing)} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
        click on me
      </button>
    </main>
  );
}
