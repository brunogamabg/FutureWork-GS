"use client";
import React, { useEffect, useState } from "react";

export default function Header() {
    const [colorize, setColorize] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        if (colorize) root.classList.add("colorize");
        else root.classList.remove("colorize");
    }, [colorize]);

    useEffect(() => {
        try {
            const savedBg = typeof window !== 'undefined' ? window.localStorage.getItem('darkBg') : null;
            const savedSurface = typeof window !== 'undefined' ? window.localStorage.getItem('darkSurface') : null;
            if (savedBg) document.documentElement.style.setProperty('--dark-bg', savedBg);
            if (savedSurface) {
                document.documentElement.style.setProperty('--dark-surface', savedSurface);
            } else if (savedBg) {
                // Simple lighten for surface if only bg is provided
                const hex = savedBg.replace('#','');
                const num = parseInt(hex.length===3 ? hex.split('').map(c=>c+c).join('') : hex, 16);
                let r=(num>>16)&255, g=(num>>8)&255, b=num&255;
                const lighten = (v)=>Math.min(255, Math.round(v + (255 - v) * 0.12));
                r=lighten(r); g=lighten(g); b=lighten(b);
                const toHex=(v)=>v.toString(16).padStart(2,'0');
                document.documentElement.style.setProperty('--dark-surface', `#${toHex(r)}${toHex(g)}${toHex(b)}`);
            }
        } catch {}
    }, []);

    return (
        <header className="text-gray-900 shadow-sm" data-white-bg>
            <div className="px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold">FutureWork</h1>
                        <p className="text-xs text-gray-600">O Futuro do Trabalho</p>
                    </div>
                </div>
                <button
                    type="button"
                    className="px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
                    onClick={() => setColorize(v => !v)}
                    data-white-bg
                >
                    {colorize ? "Claro" : "Escuro"}
                </button>
            </div>

            <div className="bg-gradient-to-r from-green-500 via-teal-500 to-blue-600 px-6 py-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    Conectando Talentos ao Futuro
                </h2>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                    Descubra profissionais envolvidos, compartilhe experiências e construa o futuro do trabalho de forma colaborativa.
                </p>
            </div>
        </header>
    );
}
