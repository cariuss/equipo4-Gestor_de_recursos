import React from "react";
import { updatePeticion } from "../../services/peticiones.service";

const UpdatePeticion = ({ peticionData, onSubmit }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      await updatePeticion(peticionData.id, data);
      onSubmit(); // recarga la lista
    } catch (error) {
      console.error("Error actualizando petición:", error);
      alert("Hubo un error al actualizar la petición.");
    }
  };

  if (!peticionData) return null;

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input type="text" name="usuario" defaultValue={peticionData.usuario} required className="w-full p-2 border rounded" />
      <input type="text" name="recurso" defaultValue={peticionData.recurso} required className="w-full p-2 border rounded" />
      <input type="number" name="cantidad_solicitada" defaultValue={peticionData.cantidad_solicitada} required className="w-full p-2 border rounded" />
      <input type="date" name="fecha_entrega_esperada" defaultValue={peticionData.fecha_entrega_esperada} required className="w-full p-2 border rounded" />
      <input type="date" name="fecha_devolucion_esperada" defaultValue={peticionData.fecha_devolucion_esperada} className="w-full p-2 border rounded" />
      <textarea name="notas" defaultValue={peticionData.notas} className="w-full p-2 border rounded" />

      <select name="estado" defaultValue={peticionData.estado} className="w-full p-2 border rounded">
        <option value="pendiente">Pendiente</option>
        <option value="aprobada">Aprobada</option>
        <option value="rechazada">Rechazada</option>
        <option value="entregada">Entregada</option>
        <option value="devuelta">Devuelta</option>
      </select>

      <div className="flex justify-end gap-2">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Actualizar</button>
      </div>
    </form>
  );
};

export default UpdatePeticion;
