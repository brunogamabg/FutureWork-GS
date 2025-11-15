import React from "react";

export default function FilterBar({ area, cidade, tecnologia, onAreaChange, onCidadeChange, onTecnologiaChange, areas, cidades, tecnologias }) {
  return (
    <div className="flex flex-wrap gap-3">
      <select value={area} onChange={e => onAreaChange(e.target.value)} className="p-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
        <option value="">Todas as áreas</option>
        {areas.map(a => <option key={a} value={a}>{a}</option>)}
      </select>
      <select value={cidade} onChange={e => onCidadeChange(e.target.value)} className="p-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
        <option value="">Todas as cidades</option>
        {cidades.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <select value={tecnologia} onChange={e => onTecnologiaChange(e.target.value)} className="p-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
        <option value="">Todas as tecnologias</option>
        {tecnologias.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
    </div>
  );
}
