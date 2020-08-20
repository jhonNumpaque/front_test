import { Response } from './../../models/response';
import { PersonaService } from './../../services/persona-service.service';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  public personas: Persona[];
  public persona: Persona;
  public nombres: string = null;
  public apellidos: string = null;
  public direccion: string = null;
  public correo: string = null;
  public telefono: string = null;
  public id: string = null;

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.list();
  }

  public list() {
    this.personaService.listPersons().subscribe((data:Response) => {
      this.personas = data.data;
    });
  }

  public create() {
    this.personaService.createPerson(this.nombres, this.apellidos, this.correo, this.telefono, this.direccion).subscribe((data:Response) => {
      if (data.data) {
        this.list();
        alert("Registro guardado!");
      } else {
        alert("No se pudo guardar");
      }
    });
  }

  public find(id: String) {
    this.personaService.findPerson(id).subscribe((data:Response) => {
      this.nombres = data.data.nombres;
      this.apellidos = data.data.apellidos;
      this.correo = data.data.correo;
      this.telefono = data.data.telefono;
      this.direccion = data.data.direccion;
      this.id = data.data.id;
    });
  }

  public edit(){
    this.personaService.editPersona(this.nombres, this.apellidos, this.correo, this.telefono, this.direccion, this.id).subscribe((data:Response) => {
      if (data.data) {
        this.list();
        alert("Registro actualizado!");
      } else {
        alert("No se pudo guardar");
      }
    });
  }

  public delete(id: String) {
    this.personaService.deletePersona(id).subscribe((data:Response) => {
      if (data.data) {
        this.list();
        alert("Registro eliminado!");
      } else {
        alert("No se pudo eliminar");
      }
    });
  }

  public save() {
    if (this.id) {
      this.edit();
    } else {
      this.create();
    }
  }
}
