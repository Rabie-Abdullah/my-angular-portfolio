import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  toMyProjects() {
    document.getElementById('myProjects')?.scrollIntoView({behavior:"smooth"})
  }
  toExperience() {
    document.getElementById('experience')?.scrollIntoView({behavior:"smooth"})
  }
  toConnectMe() {
    document.getElementById('contact')?.scrollIntoView({behavior:"smooth"})
  }
  ngOnInit(): void {
  }

}
