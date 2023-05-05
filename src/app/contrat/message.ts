import { Entreprise } from '../entreprise/entreprise';
import { Contrat } from './contrat';

export class Message {
    contrats?: Contrat[]=[];
    entreprises?: Entreprise[]=[];

    totalPages!: number;
    pageNumber!: number;
    pageSize!: number ;
}