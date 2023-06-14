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

        const busquedaUrl = 'http://localhost:8080/users/user/list?currentPage='+ item.pagina + '&pageSize='+item.nroRegistro;

        var header = {
            headers: new HttpHeaders()
                .set('Authorization',  `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJERkxPUkVTIiwiYXV0aCI6W3siYXV0aG9yaXR5IjoiUk9MRV9ESVJFQ1RPUkRFR1JVQVMifV0sInVzZXIiOiJET1JBIEZMT1JFUyIsImFjdGlvbnMiOiIiLCJyb2wiOiJEaXJlY3RvciBkZSBncsO6YXMiLCJ1dWlkIjoiNTlhNjRiMWItNmQ4OC00ZmMwLThjZjgtMTI2MGYyM2VlOGM2IiwiaWF0IjoxNjg2NzM4ODc5LCJleHAiOjE2ODY3NzQ4Nzl9.lgeK8_xejOh_EwdUAz2oVx8f1oxKZdBX5U0x5rbaymM`)
            }
        return this._httpClient.get(`${busquedaUrl}`,header);
    }

}