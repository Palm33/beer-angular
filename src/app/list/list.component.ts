import { Component, OnInit } from '@angular/core';
import { BeerService } from '../service/beer.service';
import { Beer } from '../beer';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  
  liste: any[] = [];
  beers$: Observable<Beer[]>;

  private searchTerms = new Subject<string>();

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.getBeers();
  }
 

  beerSubmit = function(beer){
    console.log('Received beer: ' + beer);
    console.log('Beer added : ' + Object.values(beer));
    this.liste.push(beer)
  }

  getBeers() {
    this.beerService.getBeers()
     .subscribe(data => {
      let cle = Object.keys(data);
      let donnees = Object.values(data);
      for(let i = 0; i < cle.length; i++){
        this.liste.push({key: cle[i], values:donnees[i]});
      }
     });
   }

   deleteBeer(key){
     this.beerService.deleteBeer(key).subscribe();
     this.liste = this.liste.filter(liste => liste.key !== key);
   }
}
