
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { BeerService } from '../service/beer.service';
import { Beer } from '../beer';


@Component({
  selector: 'app-fast-add',
  templateUrl: './fast-add.component.html',
  styleUrls: ['./fast-add.component.less']
})
export class FastAddComponent implements OnInit {

  @Output()
  beerSubmit: EventEmitter<Object> = new EventEmitter<String>(); //creating an output event



  constructor(private beerService: BeerService) { }

  ngOnInit() {
  }
  
  //Send short form 
  onSubmit(form, event){
      this.beerService.addBeer(form.form.value)
        .subscribe(beer => {
          console.log(Object.values(beer));
          let biere:Object = {key: Object.values(beer)[0], values:form.form.value};
          this.beerSubmit.emit(biere); //emmiting the event.
          form.reset();
        });
    }


}
