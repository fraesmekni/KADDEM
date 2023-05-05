import { Specialite } from "./Specialite";
import { Etudiant } from "./etudiant";

 interface IContrat {
    dateDebutContrat: Date |undefined;
    datefinContrat: Date |undefined;
    specialite: Specialite|undefined;
    archive: boolean|undefined;
    descriptionContrat: String|undefined;
    etudiantC: Etudiant|undefined;}
    interface ITypePercentage {
        count: Number;
        type: string;
      }
export {IContrat, ITypePercentage}