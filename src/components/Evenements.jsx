function Evenements({ evenements }) {

  const total = evenements.reduce(
    (somme, evenement) =>
      somme + evenement.cout_journalier * evenement.durée,
    0
  );

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Thème</th>
          <th>Date de début</th>
          <th>Date de fin</th>
          <th>Description</th>
          <th>Coût journalier</th>
          <th>Durée (jours)</th>
          <th>Coût Total Evénement</th>
        </tr>
      </thead>

      <tbody>
        {evenements.map((evenement, index) => (
          <tr key={index}>
            <td>{evenement.thème}</td>
            <td>{evenement.date_debut}</td>
            <td>{evenement.date_fin}</td>
            <td>{evenement.description}</td>
            <td>{evenement.cout_journalier} DH</td>
            <td>{evenement.durée}</td>
            <td>
              {evenement.cout_journalier * evenement.durée} DH
            </td>
          </tr>
        ))}
      </tbody>

      <tfoot>
        <tr>
          <td colSpan="6">
            Total des coûts des événements assurés :
          </td>
          <td>{total} DH</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Evenements;