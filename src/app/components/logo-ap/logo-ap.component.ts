import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})

export class LogoAPComponent implements OnInit {

/* Injecto dentro del constructor el servicio de ruteo */

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }


/* indico la ruta de la funcion login() */

  login(){
    this.router.navigate(['/login'])
  }


}
