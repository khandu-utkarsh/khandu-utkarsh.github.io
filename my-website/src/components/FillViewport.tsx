import { ReactNode } from 'react';

interface FillViewPortProps {
  children: ReactNode;
}

export default function FillViewPort({ children }: FillViewPortProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
        <main style={{ flex: '1' }}>
        {children}
      </main>
    </div>
  );
}
