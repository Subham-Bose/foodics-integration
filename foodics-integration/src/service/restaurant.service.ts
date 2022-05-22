import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})

export class restaurantService{
    adminUrl = environment.adminURL;
    constructor(private _http:HttpClient) {}

    getIntegrationData(restaurantId:string) {
        this._http.get(`${this.adminUrl}//restaurant/restaurantIntegrations`,{ params:{restaurantId:restaurantId} });
    }

    accessFoodics(clientId:string) {
        
    }
}