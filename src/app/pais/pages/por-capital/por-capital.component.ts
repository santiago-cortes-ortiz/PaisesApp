import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent{

  termino: string = '';
  error: boolean = false;

  paises: Country[] = []; 

  constructor(private paisService: PaisService) {
  }

  buscarPorCapital(termino: string){ 
    this.error = false;
    this.termino = termino;
    this.paisService.buscarCapital(termino)
    .subscribe({
      next: (response) => {
        this.paises = response;
        console.log(this.paises);
      },
      error: () => {
        this.error = true;
        this.paises = [];
      }
    })
  }

}
