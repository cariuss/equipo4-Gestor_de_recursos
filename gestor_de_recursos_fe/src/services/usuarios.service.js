import axios from "axios";



export const getUsuarios= async () => {
    try {
        const response = await axios.get("http://localhost:8000/usuarios/api/v1/");
        return response.data;
    } catch (error) {
        console.error("Error recibiendo datos:", error);
        return [];
    }
};

export const createUs = async (data) => {
    try {
        const res = await axios.post("http://localhost:8000/usuarios/api/v1/", data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return res.data;
    } catch (error) {
        console.error("Error creando usuario:", error.response?.data || error.message);
        throw error;
    }
};

export const deleteUsuario = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:8000/usuarios/api/v1/${id}/`);
        return response;
    } catch (error) {
        console.error("Error eliminando usuario:", error);
        return null;
    }
};

export const updateUsuario = async (id, data) => {
    try {
        const response = await axios.patch(`http://localhost:8000/usuarios/api/v1/${id}/`, data);
        return response.data;
    } catch (error) {
        console.error("Error actualizando usuario:", error);
        return null;
    }
};

