import React from "react";

export default function Header() {
    return (
        <header className="bg-gray-900 text-white">
            <div className="px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold">FutureWork</h1>
                        <p className="text-xs text-gray-400">O Futuro do Trabalho</p>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-l from-blue-600 via-teal-500 to-green-500 px-6 py-16 text-center">
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
