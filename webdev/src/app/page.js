
"use client";
import { useState, useMemo } from "react";
import useProfessionals from "@/hooks/useProfessionals";
import ProfessionalCard from "@/components/ProfissionalCard";
import ProfessionalModal from "@/components/ProfissionalModal";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import Header from "@/components/Header";

export default function Home() {
  const { data, loading, error } = useProfessionals();
  const [search, setSearch] = useState("");
  const [area, setArea] = useState("");
  const [cidade, setCidade] = useState("");
  const [tecnologia, setTecnologia] = useState("");
  const [selected, setSelected] = useState(null);
  const [recommendMsg, setRecommendMsg] = useState("");
  const [messageModal, setMessageModal] = useState(false);

  // Normaliza texto para busca sem acentos e case-insensitive
  const normalize = (str) =>
    (str || "")
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  // Extrai áreas, cidades e tecnologias únicas
  const areas = useMemo(() => [...new Set(data.map(p => p.area))], [data]);
  const cidades = useMemo(() => [...new Set(data.map(p => p.cidade))], [data]);
  const tecnologias = useMemo(() => [...new Set(data.flatMap(p => p.skills))], [data]);

  // Filtragem
  const filtered = useMemo(() => {
    const q = normalize(search);
    return data.filter(p => {
      const nome = normalize(p.nome);
      const cargo = normalize(p.cargo);
      const areaP = normalize(p.area);
      const cidadeP = normalize(p.cidade);
      const skills = (p.skills || []).map(normalize);

      const matchSearch =
        q === "" ||
        nome.includes(q) ||
        cargo.includes(q) ||
        areaP.includes(q) ||
        cidadeP.includes(q) ||
        skills.some(s => s.includes(q));

      const matchArea = area ? p.area === area : true;
      const matchCidade = cidade ? p.cidade === cidade : true;
      const matchTecnologia = tecnologia ? (p.skills || []).includes(tecnologia) : true;

      return matchSearch && matchArea && matchCidade && matchTecnologia;
    });
  }, [data, search, area, cidade, tecnologia]);

  function handleRecommend(profissional) {
    setRecommendMsg(`Profissional ${profissional.nome} recomendado!`);
    setTimeout(() => setRecommendMsg(""), 2000);
  }

  function handleMessage(profissional) {
    setMessageModal(true);
  }

  function handleCloseModal() {
    setSelected(null);
    setMessageModal(false);
  }

  return (
    <div className="min-h-screen bg-gray-100 transition-colors duration-300" data-surface>
      <Header />
      <div className="flex flex-col items-center py-12 px-4 bg-gray-100" data-surface>
        <div className="w-full max-w-4xl mb-8">
          <SearchBar value={search} onChange={setSearch} />
        </div>
        <div className="w-full max-w-7xl">
          <div className="flex flex-wrap gap-3 mb-8">
            <FilterBar
              area={area}
              cidade={cidade}
              tecnologia={tecnologia}
              onAreaChange={setArea}
              onCidadeChange={setCidade}
              onTecnologiaChange={setTecnologia}
              areas={areas}
              cidades={cidades}
              tecnologias={tecnologias}
            />
          </div>
          {loading && <p className="text-center text-gray-600">Carregando profissionais...</p>}
          {error && <p className="text-center text-red-600">Erro ao carregar dados.</p>}
          <div className="mb-6 text-base text-blue-600 font-medium flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {loading ? "Carregando..." : `${filtered.length} profissionais encontrados`}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map(p => (
              <ProfessionalCard key={p.id} profissional={p} onClick={setSelected} />
            ))}
          </div>
          {selected && (
            <ProfessionalModal
              profissional={selected}
              onClose={handleCloseModal}
              onRecommend={handleRecommend}
              onMessage={handleMessage}
            />
          )}
          {recommendMsg && (
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
              {recommendMsg}
            </div>
          )}
          {messageModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl p-8 w-full max-w-md border border-blue-300" data-white-bg>
                <h2 className="text-xl font-bold mb-4 text-gray-900 text-center">Enviar mensagem</h2>
                <input type="text" placeholder="Seu nome" className="w-full mb-3 p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500" />
                <textarea placeholder="Mensagem" className="w-full mb-3 p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500" rows={4} />
                <button className="bg-blue-600 text-white px-4 py-3 rounded-full hover:bg-blue-700 w-full font-semibold" onClick={handleCloseModal}>Enviar</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
