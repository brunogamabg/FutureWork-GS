import { useEffect, useState } from "react";
import profissionaisData from "@/src/data/profissionais.json";

export default function useProfessionals() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            try {
                setData(profissionaisData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }, 300);
    }, []);
    return { data, loading, error };
}
