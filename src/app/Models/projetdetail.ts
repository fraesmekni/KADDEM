import { projet } from './projet';

export class projetdetail {
  idProjetDetail?: number;
  description?: string;
  technologie?: string;
  cout_provisoire?: number;
  dateDebut?: Date;
  dateLimite?: Date;
  projet?: projet;
}
