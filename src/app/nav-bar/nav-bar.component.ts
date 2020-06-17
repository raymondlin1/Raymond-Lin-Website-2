import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void 
  {
    $(window).scroll(function() {
        $('#nav-bar').css('left',-$(window).scrollLeft());
    });
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
