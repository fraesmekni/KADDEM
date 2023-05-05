import { Niveau } from "./Niveau";

export class Equipe{
    idEquipe !:number ;
    nomEquipe !:String;
    niveau !: Niveau;


constructor( nomEquipe: String ,
  niveau:Niveau
)
{  this.nomEquipe=nomEquipe;
    this.niveau = niveau;

};

}