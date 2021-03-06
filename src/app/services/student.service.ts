import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError, pairs } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {ModalService, types} from "./modal.service"

import { Student } from '../models/student';

@Injectable({
    providedIn: 'root'
  })

export class StudentService{

    //private student: Student;
    private API_URI : string = 'http://localhost:8080';

    constructor(
        private http : HttpClient,
        private modalService : ModalService
    ){}

    getAllStudents() : Observable<any>{
        return this.http.get<Student[]> (`${this.API_URI}/student`);
    }

    saveStudent(student : Student) : Observable<any>{
        return this.http.post(`${this.API_URI}/student`, student).pipe(
            map(response => response as Request),
            catchError( e => {
                this.modalService.confirmAlert();
                return throwError(e);
            })
        )
    }

     /*
    getAllStudents() : Observable<any>{
        return this.http.get<Student[]> (`${this.API_URI}/student`).pipe(
            map((response: any ) => {
                (response.data as Student[])
                .map(student => student);
                return response;
            })
        );
    }

 getLogImportacion(pagina: number,fechaDesde:string,fechaHasta:string,origen:string): Observable<any> {
    const params = new HttpParams()
    .set('fechaDesde',fechaDesde)
    .set('fechaHasta',fechaHasta)
    .set('origen',origen);
    
    return this.http.get<LogImportacion[]>(this.urlEndPoint + "/importacion/consulta-importacion/" + pagina,{params}).pipe(
      map( (response: any) => {

        if(response.content != null){
          response.content as LogImportacion[];
          return response;
        }else{
          return [];
        }
        
      })
    );
  }

   comprobarImportacionArchivos(fecha: string): Observable<boolean> {
    const params = new HttpParams().set('fecha', fecha);
        
    return this.http.get(`${this.urlEndPoint}/comprobarImportacionArchivos`, {params}).pipe(
      map( (response: any) => {
        let importoArchivos;
        if(response.mensaje == "TRUE"){
          importoArchivos = true;
        } else {
          importoArchivos = false;
        }
        return importoArchivos;
      }),
      catchError( e => {
        return throwError(e);
      })
    );
  }

    */


}