import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teste-b8one';
  public products = [
    {
      add: false,
      fav: false,
      formerPrice: 2813.99,
      imgPath: "",
      price: 2599.00,
      title: `Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz 
      HDMI, DP, Gsync Série CRG50`,
    },
    {
      add: false,
      fav: false,
      formerPrice: 2813.99,
      imgPath: "",
      price: 2599.00,
      title: `Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz 
      HDMI, DP, Gsync Série CRG50`,
    },
    {
      add: false,
      fav: false,
      formerPrice: 2813.99,
      imgPath: "",
      price: 2599.00,
      title: `Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz 
      HDMI, DP, Gsync Série CRG50`,
    }
  ]
}
