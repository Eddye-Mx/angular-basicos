import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Thor', 'Capitán América'];
  borr: string = ''
  
  
  borrarHeroe(){
    this.borr = this.heroes.pop() || '';
  }

}
