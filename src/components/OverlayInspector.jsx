import { useEffect, useState } from 'react';

// Enable only with ?inspect=1. Nothing is rendered during normal visits.
export default function OverlayInspector() {
  const [report, setReport] = useState('');

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get('inspect') !== '1') return;
    const inspect = () => {
      const x = Math.min(window.innerWidth * 0.3, 120);
      const y = Math.min(window.innerHeight * 0.3, 220);
      const rows = document.elementsFromPoint(x, y).slice(0, 9).map((el) => {
        const style = window.getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        return `${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}${el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.') : ''} | bg:${style.backgroundColor} | pos:${style.position} | z:${style.zIndex} | ${Math.round(rect.width)}x${Math.round(rect.height)}`;
      });
      setReport(`Point ${Math.round(x)},${Math.round(y)}\n` + rows.join('\n'));
    };
    inspect();
    window.addEventListener('pageshow', inspect);
    return () => window.removeEventListener('pageshow', inspect);
  }, []);

  if (!report) return null;
  return (
    <aside style={{ position: 'fixed', bottom: 12, left: 12, right: 12, zIndex: 2147483647, maxHeight: '42vh', overflow: 'auto', padding: 12, borderRadius: 12, color: '#101419', background: '#b9f4dc', font: '11px/1.5 monospace', whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}>
      <strong>iPhone overlay inspector (screenshot this)</strong>
      <button type="button" onClick={() => setReport('')} style={{ float: 'right', padding: '2px 8px', border: '1px solid' }}>Close</button>
      <pre style={{ whiteSpace: 'pre-wrap', marginTop: 8 }}>{report}</pre>
    </aside>
  );
}
