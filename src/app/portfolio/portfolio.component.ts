import { Component } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
@Component({
    selector:'portfolio',
    templateUrl:'./portfolio.component.html',
    styleUrls:['./portfolio.component.css','../home/home.component.css'],
  //   animations: [
  // trigger(
  //     'myAnimation',
  //     [
  //       transition(
  //       ':enter', [
  //         style({transform: 'translateX(-100%)', opacity: 0}),
  //         animate('500ms', style({transform: 'translateX(0)', 'opacity': 1}))
  //       ]
  //     ),
  //     transition(
  //       ':leave', [
  //         style({transform: 'translateX(-0%)', 'opacity': 1}),
  //         animate('500ms', style({transform: 'translateX(100%)', 'opacity': 0})),
          
  //       ]
  //     )]
  //   )
  // ]
})

export class PortfolioComponent{
    // show:boolean=false;
}