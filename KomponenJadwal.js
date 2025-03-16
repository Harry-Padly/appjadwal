import { useState, useEffect } from "react";
import { useJadwal } from "../context/JadwalContext";

const KomponenJadwal = ({ jdwl }) => {
  const { hapusJadwal, editJadwal } = useJadwal();
  const [isEditing, setIsEditing] = useState(false);
  const [newTugas, setNewTugas] = useState(jdwl.tugas);

  useEffect(() => {
    console.log(`Tugas ditambahkan: ${jdwl.tugas}`);
    return () => console.log(`Tugas dihapus: ${jdwl.tugas}`);
  }, [jdwl.tugas]);

  const handleEdit = () => {
    if (isEditing && newTugas.trim() !== "") {
      editJadwal(jdwl.id, newTugas);
    }
    setIsEditing(!isEditing);
  };

  if (!jdwl || !jdwl.tugas) return null;

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={newTugas}
          onChange={(e) => setNewTugas(e.target.value)}
          onBlur={handleEdit}
          autoFocus
        />
      ) : (
        <span>{jdwl.tugas}</span>
      )}
      <button onClick={handleEdit}>{isEditing ? "Simpan" : "Edit"}</button>
      <button onClick={() => hapusJadwal(jdwl.id)}>Hapus</button>
    </li>
  );
};

export default KomponenJadwal;
