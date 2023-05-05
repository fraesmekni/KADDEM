import { Equipe } from './Equipe';
import { DetailEquipe } from './DetailEquipe';

export class PaginationEquipe {
    DetailEquipes?: DetailEquipe[]=[];
    equipes?: Equipe[]=[];

    totalPages!: number;
    pageNumber!: number;
    pageSize!: number ;
}