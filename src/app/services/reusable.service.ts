import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable()
export class ReusableService {

  private jwtHelper: JwtHelperService = new JwtHelperService();
  constructor() {}

  getToken() {

    let token : string = localStorage.getItem("token") as string
    // if (token == null) return null;
    return this.jwtHelper.decodeToken(token);
  }
}