import Signaler from "../equipements/signaler";  // Composant pour l'utilisateur
import SignalerAdmin from "../equipements/signalerAdmin";  // Composant pour l'administrateur

const SignalerRedirect = ({ userRole, idEquipement }) => {
  if (userRole === "Administrateur") {
    return <SignalerAdmin id_equipement={idEquipement} />;
  } else {
    return <Signaler id_equipement={idEquipement} />;
  }
};

export default SignalerRedirect;
