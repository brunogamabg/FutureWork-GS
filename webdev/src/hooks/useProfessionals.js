import { useEffect, useState } from "react";
import profissionaisData from "@/data/profissionais.json";

export default function useProfessionals() {
    const [data, setData] = useState(profissionaisData || []);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            // Caso no futuro venha de API, manter estrutura do hook
            setData(profissionaisData || []);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    }, []);
    return { data, loading, error };
}
