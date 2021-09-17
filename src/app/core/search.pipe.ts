import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform {
    transform(languages: string[], searchInput: string): any[]{     
        if(!searchInput) {
            return  languages; 
        }
       searchInput = searchInput.toLowerCase();
       return languages.filter(
           (x:any) =>x.nom_medoc.toLowerCase().includes(searchInput)
       ) 
     }   
}