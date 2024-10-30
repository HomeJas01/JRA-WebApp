import { Component } from '@angular/core';
import { PaisesService } from './paises.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  paises: any[] = [];

  constructor(
    private paisesService: PaisesService
  ){}

  async ngOnInit(){

    //this.paises = await this.paisesService.getPaises();

    this.paisesService.getPaises().subscribe({
      next:(data) => {
        this.paises = data  //Asigna los datos recibidos a la variable local
        console.log('Data:', this.paises)  //Muestra los datos en la consola
      },
      error:(err)=>{
        console.error('Error al obtener los datos:', err);
      }
    });
  }

}
