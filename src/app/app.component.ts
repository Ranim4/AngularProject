import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
/*  styles :[`
 h3{
   color: dodgerblue;
 }
 `] */
})
export class AppComponent {
  name = 'firsApp';
  userName='';
  showSecret = false;
  log =[];
  loadedfeature = '';

  onNavigate(feature: string){
    this.loadedfeature = feature;

  }

  onReset(){
    this.userName = '';
  }
  onToggleDetails (){
    this.showSecret=!this.showSecret;
    this.log.push(new Date());
  }
}
