import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserProfile() {
  const [usuario, setUsuario] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3001/usuario')
      .then(res => {
        setUsuario(res.data);
        setForm(res.data);
      });
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    axios.post('http://localhost:3001/usuario', form)
      .then(() => {
        setUsuario(form);
        setEditMode(false);
      });
  };

  if (!usuario) return <p>Carregando...</p>;

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6">
      <div className="flex flex-col items-center">
        <img
          src={form.imagem_url}
          alt="Perfil"
          className="w-32 h-32 rounded-full object-cover"
        />
        {editMode ? (
          <input
            type="text"
            name="imagem_url"
            value={form.imagem_url}
            onChange={handleChange}
            className="mt-2 border p-1 w-full"
          />
        ) : null}
        <h2 className="text-2xl font-semibold mt-4">{usuario.nome}</h2>
      </div>

      <div className="mt-4 space-y-2">
        {['nome', 'idade', 'rua', 'bairro', 'estado', 'biografia'].map((field) => (
          <div key={field}>
            <label className="block font-medium capitalize">{field}</label>
            {editMode ? (
              <input
                type="text"
                name={field}
                value={form[field]}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            ) : (
              <p className="text-gray-700">{usuario[field]}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end space-x-2">
        {editMode ? (
          <>
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Salvar
            </button>
            <button
              onClick={() => setEditMode(false)}
              className="px-4 py-2 border rounded"
            >
              Cancelar
            </button>
          </>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Editar Perfil
          </button>
        )}
      </div>
    </div>
  );
}

export default UserProfile;