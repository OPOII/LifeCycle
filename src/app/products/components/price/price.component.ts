import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit,OnDestroy,OnChanges {
  @Input()
  public price:number=0;

  public interval$?: Subscription;
  ngOnInit(): void {
    // Aquí se crea eventos donde se requieren intervalos para hacer validaciones o metodos infinitos
    //Es un observable que empieza a emitir valores de manera secuencial basado en un periodo de tiempo
    this.interval$=interval(1000).subscribe(value=>console.log(`Tick: ${value}`));
    console.log('Componente Hijo: ngOnInit');
  }
  ngOnDestroy(): void {
    this.interval$?.unsubscribe();
    console.log('Componente Hijo: ngOnDestroy');
  }
  ngOnChanges(changes: SimpleChanges): void {

    console.log('Componente Hijo: ngOnChanges');
    console.log({changes});
  }


}
