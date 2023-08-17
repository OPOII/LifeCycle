import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit,OnDestroy,OnChanges {
  @Input()
  public price:number=0;
  ngOnInit(): void {
    console.log('Componente Hijo: ngOnInit');
  }
  ngOnDestroy(): void {

    console.log('Componente Hijo: ngOnDestroy');
  }
  ngOnChanges(changes: SimpleChanges): void {

    console.log('Componente Hijo: ngOnChanges');
    console.log({changes});
  }


}
