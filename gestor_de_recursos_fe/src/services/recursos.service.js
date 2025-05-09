import axios from "axios";

export const getRecursos = async () => {
    try {
        const response = await axios.get("http://localhost:8000/recursos/api/v1/");
        return response.data;
    } catch (error) {
        console.error("Error fetching recursos:", error);
        return [];
    }
};

export const updateRecurso = async (id, data) => {
    try {
        const response = await axios.patch(`http://localhost:8000/recursos/api/v1/${id}/`, data);
        return response.data;
    } catch (error) {
        console.error("Error updating recurso:", error);
        return null;
    }
};

export const createRecurso = async (data) => {
    try {
        const { data: res } = await axios.post("http://localhost:8000/recursos/api/v1/", data);
        const { id, nombre, descripcion, tipo, cantidad_total, cantidad_disponible } = res;
        return { id, nombre, descripcion, tipo, cantidad_total, cantidad_disponible };
    } catch (error) {
        console.error("Error creating usuario:", error);
        return null;
    }
};

export const deleteRecurso = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:8000/recursos/api/v1/${id}/`);
        return response;
    } catch (error) {
        console.error("Error deleting recurso:", error);
        return null;
    }
};
