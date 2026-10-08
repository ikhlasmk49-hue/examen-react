import { useState } from "react";

function Formulaire() {
  const [theme, setTheme] = useState("");
  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");
  const [cout, setCout] = useState("");
  const [expert, setExpert] = useState("");
  const [message, setMessage] = useState("");

  function confirmer(e) {
    e.preventDefault();

    const debut = new Date(dateDebut);
    const fin = new Date(dateFin);

    const duree =
      Math.ceil((fin - debut) / (1000 * 60 * 60 * 24)) + 1;

    const total = cout * duree;

    setMessage(
      `L'expert ${expert} assurera le thème : ${theme}, avec un coût journalier : ${cout} DH, pour une durée de : ${duree} jours, soit un coût total de : ${total} DH`
    );
  }

  return (
    <div>
      <h3>Formulaire de l'événement</h3>

      <form onSubmit={confirmer}>

        <label>Thème :</label>
        <input
          type="text"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />

        <br /><br />

        <label>Date de début :</label>
        <input
          type="date"
          value={dateDebut}
          onChange={(e) => setDateDebut(e.target.value)}
        />

        <br /><br />

        <label>Date de fin :</label>
        <input
          type="date"
          value={dateFin}
          onChange={(e) => setDateFin(e.target.value)}
        />

        <br /><br />

        <label>Coût :</label>
        <input
          type="number"
          value={cout}
          onChange={(e) => setCout(e.target.value)}
        />

        <br /><br />

        <label>Expert :</label>
        <input
          type="text"
          value={expert}
          onChange={(e) => setExpert(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Confirmer
        </button>

      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Formulaire;