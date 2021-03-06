import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Person} from "./person.model";
import {Observable} from "rxjs";
import {HttpConfiguration} from "../../shared/http-configuration.service";
import * as _ from "lodash" ;
@Injectable()
export class OrganizerService{
    constructor(private http:Http, private configuration:HttpConfiguration){}

    getAllOrganizers(){
        return this.getAllFor("admins");
    }

    getAllVolunteers(){
        return Observable.of([]);//this.getAllFor("volunteers");
    }

    private getAllFor(type:string):Observable<Person[]>{
        return this.http.get(`${this.configuration.apiServer}/users/search/${type}`)
            .map((result: Response) => result.json()['_embedded']['users'] as Person[])
            .map((persons: Person[]) => _.shuffle(persons));
    }

}