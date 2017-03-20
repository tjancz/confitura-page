import {Injectable} from "@angular/core";
import {CustomHttp} from "../../shared/custom-http.service";
import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {User} from "./user.model";
@Injectable()
export class UserService{
    constructor(private http:CustomHttp){}

    getBy(id:string):Observable<User>{
        return this.http.get(`/users/${id}`)
            .map((response: Response) => response.json() as User);
    }

    save(user:User){
        return this.http.post(`/users`, user);
    }

}