import { Offre } from "./Offre";
import { Partenaire } from "./Partenaire";
import { Universite } from "./Universite";

export class PagePa {
    universites?: Universite[]=[];
    partenaires?: Partenaire[]=[];
    offres?: Offre[]=[];
    totalPages!: number;
    pageNumber!: number;
    pageSize!: number ;
}