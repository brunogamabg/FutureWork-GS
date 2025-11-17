"use client";
import React, { useMemo } from "react";

export default function ProfessionalCard({ profissional, onClick }) {
  const avatarUrl = useMemo(() => `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(profissional.nome.split(' ')[0])}`,[profissional.nome]);

  return (
    <div
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 cursor-pointer hover:scale-[1.02] transition-all border border-blue-300 flex flex-col items-center"
      onClick={() => onClick(profissional)}
      data-white-bg
    >
      <img
        src={avatarUrl}
        alt={profissional.nome}
        className="w-24 h-24 rounded-full mb-4 object-cover bg-gray-200"
      />
      <h3 className="text-lg font-bold text-center text-gray-900 mb-1">{profissional.nome}</h3>
      <p className="text-sm text-center text-blue-600 font-medium mb-2">{profissional.cargo}</p>
      <p className="text-xs text-center text-gray-500 mb-3">
        {profissional.cidade} · {profissional.area}
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {profissional.skills.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-transparent"
            data-chip
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
