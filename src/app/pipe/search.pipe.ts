import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return [];
    if(!args) return value;
    let filtre = value.filter(beer => beer.values.name.toLowerCase().includes(args.toLowerCase()));
    return filtre; 
  }

}
