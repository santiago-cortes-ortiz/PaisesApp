import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent{

  termino: string = '';
  error: boolean = false;

  constructor(private paisService: PaisService) {
  }

  buscar(){
    this.error = false;
    console.log(this.termino)
    this.paisService.buscarPais(this.termino)
    .subscribe(
      {
        next: (response) => {console.log(response)},
        error: (err) => { this.error = true}
      }
    );
  }

}
