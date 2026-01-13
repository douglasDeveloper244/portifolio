import React, { useEffect, useRef } from 'react';

export const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const characters = '01CODE{}[]<>/\*&%$#!?ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ';
    const fontSize = 16;
    
    const layers = [
      { speed: 0.4, opacity: 0.1, size: 12, color: 'rgba(6, 182, 212, 0.1)' },
      { speed: 0.7, opacity: 0.2, size: 14, color: 'rgba(6, 182, 212, 0.2)' },
      { speed: 1.2, opacity: 0.4, size: 18, color: 'rgba(6, 182, 212, 0.4)' }
    ];

    interface Column {
      x: number;
      y: number;
      speed: number;
      layerIndex: number;
      chars: string[];
    }

    let columns: Column[] = [];

    const initColumns = () => {
      columns = [];
      const totalWidth = width + 100;
      for (let x = 0; x < totalWidth; x += fontSize) {
        const layerIndex = Math.floor(Math.random() * layers.length);
        columns.push({
          x,
          y: Math.random() * -height,
          speed: layers[layerIndex].speed + Math.random() * 0.5,
          layerIndex,
          chars: []
        });
      }
    };

    initColumns();

    const draw = () => {
      ctx.fillStyle = 'rgba(2, 6, 23, 0.15)';
      ctx.fillRect(0, 0, width, height);

      columns.forEach((col) => {
        const layer = layers[col.layerIndex];
        const char = characters.charAt(Math.floor(Math.random() * characters.length));
        const dx = col.x - mouseRef.current.x;
        const dy = (col.y * layer.size) - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const isNearMouse = distance < 150;

        ctx.font = `${layer.size}px monospace`;
        
        if (isNearMouse) {
          ctx.fillStyle = `rgba(34, 211, 238, ${layer.opacity + 0.4})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#22d3ee';
        } else {
          ctx.fillStyle = layer.color;
          ctx.shadowBlur = 0;
        }

        ctx.fillText(char, col.x, col.y * layer.size);
        
        if (Math.random() > 0.9) {
          ctx.fillStyle = '#fff';
          ctx.fillText(char, col.x, col.y * layer.size);
        }

        col.y += col.speed;

        if (col.y * layer.size > height) {
          col.y = -5;
          col.speed = layer.speed + Math.random() * 0.5;
        }
      });
      
      requestAnimationFrame(draw);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initColumns();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    const animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] pointer-events-none"
      style={{ filter: 'contrast(1.2) brightness(0.8)' }}
    />
  );
};