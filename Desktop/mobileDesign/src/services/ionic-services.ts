import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IonicServices {

  constructor(private http : HttpClient) { }
  name: any;
  result: any;
   configUrl = "http://132.148.156.187:8080/WidgetData/AroundMePage/Home"

  getName(){
      this.name="kishore";
      return this.name;
  }

  getConfig() {
    return this.http.get(this.configUrl);
  }

  public getWidgetData() : Promise<any> {
    return new Promise ((resolve, reject) => {
        let apiUrl = "http://132.148.156.187:8080/WidgetData/AroundMePage/Home";
        this.http.get(apiUrl).toPromise()
        .then(
            res => {
                 console.log(res);
                 resolve(res);
            }
        )
    
    }); 
  }

}