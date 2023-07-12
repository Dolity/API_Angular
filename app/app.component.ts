import { Component } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webservice';

  constructor(private http: HttpClient) {

  }

//   listUser(){
//     console.log('ok');

//     let request = this.http.get('http://202.28.34.250/webdev/user')
//           .subscribe((data:any) => {
//             console.log('Data: '+ JSON.stringify(data));
//           }, (error:any) =>{
//             console.log('Data: '+ JSON.stringify(error));
//           });
//     console.log('continue');

//     // request.unsubscribe() cancel request subscribe

//     console.log('Next statement');
//   }
// }

  async  listUser(){ //wait data and run line 38,39
    console.log('ok');

    let response = await this.http.get('http://202.28.34.250/webdev/user').toPromise();
    console.log('Response: '+ JSON.stringify(response));
    console.log('continue');
    console.log('Next statement');
  }
}
