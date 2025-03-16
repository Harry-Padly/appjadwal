import { useEffect } from "react";
import { useJadwal } from "../context/JadwalContext";
import KomponenJadwal from "./KomponenJadwal";

const DaftarJadwal = () => {
  const { jadwal } = useJadwal();

  // Lifecycle: Logging daftar tugas setiap kali berubah (Updating)
  useEffect(() => {
    console.log("Daftar tugas diperbarui:", jadwal);
  }, [jadwal]);

  return (
    <ul>
      {jadwal.map((jdwl) => (
        <KomponenJadwal key={jdwl.id} jdwl={jdwl} />
      ))}
    </ul>
  );
};

export default DaftarJadwal;
