import { Etudiant } from "./etudiant";
import { Specialite } from "./Specialite";

export class Contrat{
    dateDebutContrat: Date |undefined;
    datefinContrat: Date |undefined;
    specialite: Specialite|undefined;
    archive: boolean|undefined;
    descriptionContrat: String|undefined;
    etudiantC: Etudiant|undefined;
    montantContrat?: number|undefined;
idContrat?: number|undefined;
    constructor( dateDebutContrat: Date ,
        datefinContrat: Date ,
       specialite: Specialite,
       archive: boolean, descriptionContrat: String,
       etudiantC: Etudiant,montantContrat: number
       )
    {  this.dateDebutContrat=dateDebutContrat;
        this.datefinContrat=datefinContrat;
        this.specialite=specialite;
        this.archive=archive;
       this.descriptionContrat=descriptionContrat;
       this.etudiantC=etudiantC;
       this.montantContrat=montantContrat;

    };

}