import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:any;
  password:any;


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    console.log('ok');
    let json = {email : this.email, password: this.password}
    this.http.post('http://202.28.34.250/webdev/login', JSON.stringify(json))
      .subscribe(response =>{
        console.log(response);

        //chang page
        if(response){
          console.log('Login Success');

          this.router.navigateByUrl('/member/'+this.email);

        }else{
          console.log('Loign fail');
        }

      }, erorr =>{
        console.log('Fail');
      });
  }
}
