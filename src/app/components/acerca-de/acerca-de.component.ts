import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

/* creo objeto de tipo "persona" y le paso los parametros*/

  persona: persona = new persona("","","");

/* llama al servicio, hacere referencia a "persona.service.ts"  */

  constructor(public personaService: PersonaService){ }


/* Suscribe detecta los cambios realizados y provoca una respuesta */ 

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

}
