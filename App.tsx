import React from 'react';
import { Resume } from './components/Resume';
import { Printer, Download } from 'lucide-react';

function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 flex flex-col items-center">
      {/* Controls - Hidden during print */}
      <div className="w-full max-w-[210mm] mb-6 flex justify-between items-center no-print">
        <div className="text-slate-500 text-sm font-medium">
          建议使用 Chrome 浏览器并选择 "另存为 PDF"
        </div>
        <div className="flex gap-4">
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-2.5 rounded-lg shadow-md transition-all font-medium text-sm"
          >
            <Printer size={18} />
            打印 / 保存 PDF
          </button>
        </div>
      </div>

      {/* Resume Container */}
      <Resume />
      
      <footer className="mt-8 text-slate-400 text-xs no-print">
        Designed with React & Tailwind CSS
      </footer>
    </div>
  );
}

export default App;