import React from "react";

export default function ProfessionalModal({ profissional, onClose, onRecommend, onMessage }) {
    if (!profissional) return null;
    // Avatar DiceBear
    const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(profissional.nome.split(' ')[0])}`;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 w-full max-w-lg relative shadow-2xl border border-gray-200">
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-3xl font-light"
                    onClick={onClose}
                    aria-label="Fechar"
                >
                    ×
                </button>
                <div className="flex flex-col items-center">
                    <img src={avatarUrl} alt={profissional.nome} className="w-32 h-32 rounded-full mb-4 object-cover bg-gray-100"/>
                    <h2 className="text-2xl font-extrabold text-center mb-2 text-gray-900">{profissional.nome}</h2>
                    <p className="text-center text-blue-600 font-semibold mb-2">{profissional.cargo}</p>
                    <div className="mb-4 text-center">
                        <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-2">{profissional.area}</span>
                        <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{profissional.cidade}</span>
                    </div>
                    <div className="mb-4 flex flex-wrap justify-center gap-2">
                        {profissional.skills.map((skill) => (
                            <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">{skill}</span>
                        ))}
                    </div>
                    <div className="w-full text-sm space-y-3 mb-4">
                        <div>
                            <strong className="text-gray-700">Formação:</strong> <span className="text-gray-600">{profissional.academico}</span>
                        </div>
                        <div>
                            <strong className="text-gray-700">Experiência:</strong> <span className="text-gray-600">{profissional.experiencia}</span>
                        </div>
                        <div>
                            <strong className="text-gray-700">Soft Skills:</strong> <span className="text-gray-600">{profissional.softSkills.join(", ")}</span>
                        </div>
                        <div>
                            <strong className="text-gray-700">Hobbies:</strong> <span className="text-gray-600">{profissional.hobbies.join(", ")}</span>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-4 w-full">
                        <button
                            className="flex-1 bg-green-600 text-white px-4 py-3 rounded-full hover:bg-green-700 font-semibold shadow"
                            onClick={() => onRecommend(profissional)}
                        >
                            Recomendar
                        </button>
                        <button
                            className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-full hover:bg-blue-700 font-semibold shadow"
                            onClick={() => onMessage(profissional)}
                        >
                            Mensagem
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
