import { Component, Input, OnInit } from '@angular/core';

export class IconModel{

  constructor(public name:string, public size?:string, public color?:string, public top?:string, public left?:string){}

}
@Component({
  selector: 'aic',
  template: `
    <style>
      .container{
        position: relative;
      }
      .overlay{
        position: absolute;
      }
    </style>
    <div class="container">
      <div class="overlay"  *ngFor="let icon of icons; let i =index;" 
          [style.top]="icon.top"
          [style.left]="icon.left"
          [style.z-index]="i">

        <mat-icon 
          [style.font-size]="icon.size"
          [style.color]="icon.color">{{icon.name}}</mat-icon>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class AngularIconComposerComponent implements OnInit {

  @Input()
  icons: IconModel[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
