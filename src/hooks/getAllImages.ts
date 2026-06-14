import { useQuery } from "@tanstack/react-query";


export const getAllImages = () => {

    return useQuery({
        queryKey: ["images"],
        queryFn: async () => {
            const response = await fetch("http://localhost:3000/game/all");
            if (!response.ok) {
                throw new Error("Failed to fetch images");
            }
            return response.json();
        },
    });

}