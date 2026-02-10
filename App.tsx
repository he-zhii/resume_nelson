import React, { useState } from 'react';
import { Resume } from './components/Resume';
import { Printer, Download, Loader2 } from 'lucide-react';
import html2pdf from 'html2pdf.js';

function App() {
  const [isExporting, setIsExporting] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleExportPDF = async () => {
    setIsExporting(true);

    try {
      const element = document.getElementById('resume-content');
      if (!element) {
        alert('无法找到简历内容');
        return;
      }

      // Hide no-print elements temporarily
      const noPrintElements = element.querySelectorAll('.no-print');
      noPrintElements.forEach(el => {
        (el as HTMLElement).style.display = 'none';
      });

      const opt = {
        margin: 0,
        filename: '贺泽_求职简历.pdf',
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: {
          scale: 2, // Better compatibility
          useCORS: true,
          logging: false,
          letterRendering: true,
          allowTaint: true,
          backgroundColor: '#ffffff'
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait',
          compress: true
        },
        pagebreak: { mode: ['css', 'legacy'] }
      };

      await html2pdf().set(opt).from(element).toPdf().get('pdf').then((pdf: any) => {
        // Force single page by adding all content to first page only
        const totalPages = pdf.internal.getNumberOfPages();
        for (let i = totalPages; i > 1; i--) {
          pdf.deletePage(i);
        }
      }).save();

      // Restore no-print elements
      noPrintElements.forEach(el => {
        (el as HTMLElement).style.display = '';
      });

    } catch (error) {
      console.error('PDF export failed:', error);
      alert('PDF导出失败，请重试');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 flex flex-col items-center">
      {/* Controls - Hidden during print */}
      <div className="w-full max-w-[210mm] mb-6 flex justify-between items-center no-print">
        <div className="text-slate-500 text-sm font-medium">
          点击照片区域上传图片，拖拽调整位置
        </div>
        <div className="flex gap-4">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-slate-600 hover:bg-slate-500 text-white px-5 py-2.5 rounded-lg shadow-md transition-all font-medium text-sm"
          >
            <Printer size={18} />
            打印
          </button>
          <button
            onClick={handleExportPDF}
            disabled={isExporting}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 disabled:bg-slate-400 text-white px-6 py-2.5 rounded-lg shadow-md transition-all font-medium text-sm"
          >
            {isExporting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                导出中...
              </>
            ) : (
              <>
                <Download size={18} />
                保存 PDF
              </>
            )}
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