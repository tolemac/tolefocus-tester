import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
<div focus-group>
    <input value="1"/>
    <input autofocus="observe" *ngIf="show3"  value="2" [hidden]="!show2" /><button (click)="show2 = !show2">hide</button>
    <input autofocus value="2" *ngIf="show3" /><button (click)="show3 = !show3">hide</button>
    <div focus-order>DIV</div>
    <input value="3"/>
    <a href="#">hola</a>
    <div focus-group>
        <div focus-group>
            <select><option value="1">opcion</option></select>
            <input value="1"/>
            <input value="2"/>
            <input value="3"/>
        </div>
    </div>
    <input focus-order="17" *ngIf="show" value="1"/>
    <input focus-order="18" *ngIf="show" value="2"/>
    <button focus-order="20" (click)="show = !show">click</button>
    <input focus-order="19" *ngIf="show" value="3"/>
</div>
<div focus-group>
    <input value="4"/>
    <input value="5"/>
    <textarea>venga</textarea>
    <div focus-group>
        <input value="b1"/>
        <input value="b2"/>
        <input value="b3"/>
    </div>
    <input value="6"/>
    <input value="7"/>
</div>
  `,
})
export class AppComponent  {
  name = 'Angular';
  show = true;
  show2 = true;
  show3 = true;
}
