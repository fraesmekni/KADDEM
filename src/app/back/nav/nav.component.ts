import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  goToContrat(){
    return this.route.url === '/contrat/list'
  }

  goToUniversite(){
    return this.route.url === '/universite/mainuniversite'
  }

  goToPartenaire(){
    return this.route.url === '/partenaire/mainpartenaire'
  }

  goToOffre(){
    return this.route.url === '/offre/mainoffre'
  }


}
