import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    clickLog=[];
    display="";

    toggle(){

        this.display = this.display === '' ? 'none':'';
        this.clickLog.push(Date.now());
    }

    reset(){

        this.clickLog=[];
        this.display="";
; 

    }


/*test 2*/

}