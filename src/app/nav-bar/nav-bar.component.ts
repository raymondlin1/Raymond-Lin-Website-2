import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickHome()
  {
    this.router.navigate(['home']); 
  }
  
  onClickResume()
  {
    console.log("resume")
    this.router.navigate(['resume']);
  }
}
