import { NgForm } from '@angular/forms';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  invalidEmail:boolean = false
  invalidMessage:boolean = false
  alert:boolean = false
  constructor(private http:HttpService) { }

  changeEmail() {
    this.invalidEmail = false
  }
  changeMessage() {
    this.invalidMessage = false
  }

  onSubmit(value:any) {
    let client = {
      email: value.email,
      message: value.message
    }

    this.http.sendMeEmail("http://localhost:3000/sendmail", client).subscribe(
      data => {
        let res:any = data;
      },
      err => {
        console.log(err);
      }
      )
      this.alert = true

  }
  closealert() {
    this.alert = false
  }
  
 
  completeLogin(myForm:NgForm){   
  
    myForm.reset();  
    // calling this method will reset the method
       
    }
  
  ngOnInit(): void {
  }

}
