export class User {

  constructor(
  
    public username: string,
    public firstname:string,
  	public password: string,
    public email:string,
    public profession:string,
    public sexe: string,
   public sex:boolean,
   public userphone:string,
   public etatuser?:number,
   public statutuser?:boolean,
   public   id_pharma?:string,
   public   pharma_name?:any,

   public roles?:string [],
   public adresse?:{  
      id_adresse?: string,
      pays:string,
      ville:string,
      region?:string,
      code_postal?:string,
      longitude?:string,
      latitude?: string
    },
    public id?: string,

  ) {  }

}