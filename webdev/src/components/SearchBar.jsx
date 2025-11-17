import React from "react";

export default function SearchBar({ value, onChange }) {
    return (
        <div className="relative w-full" data-white-bg>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <input
                type="text"
                placeholder="Buscar por nome, cargo, habilidade..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-blue-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={value}
                onChange={e => onChange(e.target.value)}
                data-white-bg
            />
        </div>
    );
}
