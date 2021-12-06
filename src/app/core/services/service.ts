import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { User, Doctor, PublicServant, Discover, Record, Disease, Specialize } from "./interfaces";
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message_service';

@Injectable({
    providedIn: 'root'
})

export class AllServices {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    private token = '';
    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }


    getUsers(): Observable<User[]> {
        return this.http.get<User[]>('http://34.142.61.196:8080/api/user')
    }
    getDiscovers(): Observable<Discover[]> {
        return this.http.get<Discover[]>('http://34.142.61.196:8080/api/discover')
    }

    updateUserPhone(user: User) : Observable<any> {
        return this.http.put('http://34.142.61.196:8080/api/user', user, this.httpOptions).pipe(
          tap(_ => this.log(`updated user phone=${user.phone}`)),
          catchError(this.handleError<any>('updateHero'))
        );
    }

    updateDiscoverFirstEncDate(discover: Discover) : Observable<any> {
        return this.http.put('http://34.142.61.196:8080/api/discover', discover, this.httpOptions).pipe(
          tap(_ => this.log(`updated hero first_enc_date=${discover.first_enc_date}`)),
          catchError(this.handleError<any>('updateHero'))
        );
    }
    
    getDoctors(): Observable<Doctor[]> {
        return this.http.get<Doctor[]>('http://34.142.61.196:8080/api/doctor')
    }

    updateDoctorDegree(doctor: Doctor) : Observable<any> {
        return this.http.put('http://34.142.61.196:8080/api/doctor', doctor, this.httpOptions).pipe(
          tap(_ => this.log(`updated hero degree=${doctor.degree}`)),
          catchError(this.handleError<any>('updateHero'))
        );
    }

    getDoctorsByDiseases():  Observable<Doctor[]> {
        return this.http.get<Doctor[]>('http://34.142.61.196:8080/api/doctor/diseases')
    }

    getPublicServants(): Observable<PublicServant[]> {
        return this.http.get<PublicServant[]>('http://34.142.61.196:8080/api/publicServant')
    }

    updatePublicServantDepartment(publicServant: PublicServant) : Observable<any> {
        return this.http.put('http://34.142.61.196:8080/api/publicServant', publicServant, this.httpOptions).pipe(
          tap(_ => this.log(`updated hero degree=${publicServant.department}`)),
          catchError(this.handleError<any>('updateHero'))
        );
    }

    deletePublicServantDepartment(publicServant: PublicServant) : Observable<any> {
        return this.http.delete<PublicServant>('http://34.142.61.196:8080/api/publicServant', this.httpOptions).pipe(
          tap(_ => this.log(`delete hero email=${publicServant.email}`)),
          catchError(this.handleError<PublicServant>('deleteHero'))
        );


    }

    getRecords(): Observable<Record[]> {
        return this.http.get<Record[]>('http://34.142.61.196:8080/api/record')
    }

    updateRecordDepartment(record: Record) : Observable<any> {
        return this.http.put('http://34.142.61.196:8080/api/record', record, this.httpOptions).pipe(
          tap(_ => this.log(`updated hero deaths=${record.total_deaths}`)),
          catchError(this.handleError<any>('updateHero'))
        );
    }
    
    getDiseases(): Observable<Disease[]> {
        return this.http.get<Disease[]>('http://34.142.61.196:8080/api/disease')
    }

    updateDiseaseDepartment(disease: Disease) : Observable<any> {
        return this.http.put('http://34.142.61.196:8080/api/disease', disease, this.httpOptions).pipe(
          tap(_ => this.log(`updated hero deaths=${disease.pathogen}`)),
          catchError(this.handleError<any>('updateHero'))
        );
    }

    getSpecializes(): Observable<Specialize[]> {
        return this.http.get<Specialize[]>('http://34.142.61.196:8080/api/specialize')
    }

    private handleData(res: any) {
        const body = res.json();
        console.log(body); // for development purposes only
        return body.result || body || { };
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
      
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
      
          // TODO: better job of transforming error for user consumption
          this.log
          (`${operation} failed: ${error.message}`);
      
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }

      private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
      }
}