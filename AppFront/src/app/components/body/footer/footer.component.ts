import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {




  irContactanos() {
    document.getElementById("contacto-imagen")?.scrollIntoView({behavior:"smooth"});
  }







}
