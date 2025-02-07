import { httpClient } from "../httpClient";

export const fetchCities = async (search: string) => {
    try {
        const response = await httpClient.get(`https://api.geoapify.com/v1/geocode/autocomplete`, {
            params: {
                text: search,
                apiKey: import.meta.env.VITE_GEOAPIFY_KEY
            }
        });
        const suggestions = response.data.features.map((feature: any) => feature.properties.formatted);
        return suggestions;
    } catch (error) {
        console.error('Erro ao buscar sugestões de cidades:', error);
    }
    return [];
};