import React, { useState, useRef, useCallback } from 'react';
import { User, Move, Upload } from 'lucide-react';

interface PhotoUploadProps {
  onPhotoChange?: (photoUrl: string | null) => void;
}

export const PhotoUpload: React.FC<PhotoUploadProps> = ({ onPhotoChange }) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const url = event.target?.result as string;
        setPhotoUrl(url);
        setPosition({ x: 0, y: 0 }); // Reset position when new image uploaded
        onPhotoChange?.(url);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!photoUrl) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  }, [photoUrl, position]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();

    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const maxX = rect.width * 0.3;
    const maxY = rect.height * 0.3;

    const newX = Math.max(-maxX, Math.min(maxX, e.clientX - dragStart.x));
    const newY = Math.max(-maxY, Math.min(maxY, e.clientY - dragStart.y));

    setPosition({ x: newX, y: newY });
  }, [isDragging, dragStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div className="shrink-0">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <div
        ref={containerRef}
        onClick={!photoUrl ? handleClick : undefined}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={`
          w-28 h-36 border-2 border-slate-200 bg-slate-50 rounded-sm 
          flex flex-col items-center justify-center text-slate-300 
          relative overflow-hidden group shadow-sm transition-all
          ${!photoUrl ? 'cursor-pointer hover:border-slate-400 hover:bg-slate-100' : ''}
          ${photoUrl && !isDragging ? 'cursor-grab' : ''}
          ${isDragging ? 'cursor-grabbing' : ''}
        `}
        style={{ userSelect: 'none' }}
      >
        {photoUrl ? (
          <>
            <img
              src={photoUrl}
              alt="个人照片"
              className="w-full h-full object-cover pointer-events-none"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: isDragging ? 'none' : 'transform 0.1s ease-out'
              }}
              draggable={false}
            />
            {/* Drag indicator overlay */}
            <div className={`
              absolute inset-0 bg-black/0 group-hover:bg-black/20 
              flex items-center justify-center transition-all no-print
              ${isDragging ? 'bg-black/30' : ''}
            `}>
              <div className={`
                bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 
                transition-opacity shadow-lg
                ${isDragging ? 'opacity-100 scale-110' : ''}
              `}>
                <Move size={16} className="text-slate-700" />
              </div>
            </div>
            {/* Click to change overlay */}
            <button
              onClick={(e) => { e.stopPropagation(); handleClick(); }}
              className="absolute bottom-1 right-1 bg-slate-800/80 hover:bg-slate-800 text-white p-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity no-print"
            >
              <Upload size={12} />
            </button>
          </>
        ) : (
          <>
            <User size={48} className="mb-2 text-slate-300 group-hover:text-slate-400 transition-colors" />
            <span className="text-xs font-medium uppercase tracking-wider group-hover:text-slate-400 transition-colors">点击上传</span>
            <div className="absolute inset-0 border-4 border-white opacity-50"></div>
          </>
        )}
      </div>
    </div>
  );
};
