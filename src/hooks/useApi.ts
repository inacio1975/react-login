import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API,
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        return {
            user: { id: "123", email: 'etiandra@example.com', name: "Etiandra" },
        };
        const response = await api.post("/user/validate", { token });
        return response.data;
    },
    sigin: async (email: string, password: string) => {
        return {
            user: { id: "123", email: email, name: "Etiandra" },
            token: "123456789abcdefghijklmnopqrstuvwxyz",
        };
        const response = await api.post("/sigin", { email, password });
        return response.data;
    },
    signout: async () => {
        return { status: true};
        const response = await api.post("/logout");
        return response.data;
    },
});
