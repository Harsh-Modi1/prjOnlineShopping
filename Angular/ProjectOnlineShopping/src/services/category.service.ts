import {Categories} from 'src/models/category.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: "root" })

export class categoryservice{
    constructor(private http: HttpClient) {}

getcategorylist(){
    return this.http.get("https://localhost:44386/api/Categories").toPromise();
}

}
