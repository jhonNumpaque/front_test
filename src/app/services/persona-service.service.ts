import { Persona } from './../models/persona';
import { endpoints } from './../../settings/endpoints';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private client: HttpClient) { }

  public listPersons() {
    return this.client.get(endpoints.list);
  }

  public findPerson(id:String) {
    return this.client.post(endpoints.list + "/" + id, { id: id });
  }

  public createPerson(nombres: String, apellidos: String, correo: String, telefono: String, direccion: String) {
    return this.client.post<any>(endpoints.register, {
      nombres: nombres,
      apellidos: apellidos,
      correo: correo,
      telefono: telefono,
      direccion: direccion
    });
  }

  public editPersona(nombres: String, apellidos: String, correo: String, telefono: String, direccion: String, id: String) {
    return this.client.post(endpoints.edit, { nombres: nombres,
      apellidos: apellidos,
      correo: correo,
      telefono: telefono,
      direccion: direccion,
      id: id
    });
  }

  public deletePersona(id:String){
    return this.client.post(endpoints.delete + "/" + id, { id: id });
  }
}
