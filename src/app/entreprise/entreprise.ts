
export class Entreprise {
    idEntreprise: number |undefined;
    nomEntreprise: String;
    locEntreprise: String;
   latitude: Number |undefined;
    longitude: Number |undefined;
    nbPlaceRest:number;
    distance:number|undefined;


    constructor(  
        nomEntreprise: String,
        locEntreprise: String,
        latitude: Number,
        longitude: Number,
        nbPlaceRest:number,
        idEntreprise?: number,
        distance?:number
        )
    
    {   if(idEntreprise){ this.idEntreprise=idEntreprise;
        this.nomEntreprise=nomEntreprise;
        this.locEntreprise=locEntreprise;
        this.nbPlaceRest=nbPlaceRest;
        this.latitude=latitude;
        this.longitude=longitude;
        this.distance=distance;
    }
        else {
            this.nomEntreprise=nomEntreprise;
            this.locEntreprise=locEntreprise;
            this.nbPlaceRest=nbPlaceRest;
            this.latitude=latitude;
            this.longitude=longitude;
            this.distance=distance;
        }
    };
    

}