import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./interfaces";
import { tap } from "rxjs/operators";


@Injectable({
    providedIn: 'root'
})

export class AuthorizationService {
    private token = '';
    constructor(private http: HttpClient) {

    }

    register(user: User): Observable<User> {
        return this.http.post<User>('http://34.142.61.196:8080/api/user/register', user);
    }

    setToken(token: string) {
        if (token !== null) {
            this.token = token;
        }
    }

    getToken() {
        return this.token;
    }

    isAuthenticated() {
        return !!this.token;
    }

    logout() {
        this.setToken('');
        localStorage.clear;
    }
}