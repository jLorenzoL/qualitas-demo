import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Busqueda } from "../models/busqueda.interface";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private _httpClient: HttpClient) { }

    getListUser(item: Busqueda): Observable<any>{

        

        const busquedaUrl = 'http://localhost:8080/users/user/list?currentPage='+ item.pagina + '&pageSize='+item.nroRegistro + '&criteria=' + item.criteria;

        // var header = {
        //     headers: new HttpHeaders()
        //         .set('Authorization',  `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJERkxPUkVTIiwiYXV0aCI6W3siYXV0aG9yaXR5IjoiUk9MRV9ESVJFQ1RPUkRFR1JVQVMifV0sInVzZXIiOiJET1JBIEZMT1JFUyIsImFjdGlvbnMiOiIiLCJyb2wiOiJEaXJlY3RvciBkZSBncsO6YXMiLCJ1dWlkIjoiZTY2OTk1NDMtZTlkZS00NDM0LTljZGYtMDFhNWRhZDhlNTQ0IiwiaWF0IjoxNjg3MDMwMDA1LCJleHAiOjE2ODcwNjYwMDV9.HSt7c7rSI-QVfda6rBrxEXICbuzh7U_5R8I1z9J4ctI`)
        //     }
        return this._httpClient.get(`${busquedaUrl}`);
    }

}