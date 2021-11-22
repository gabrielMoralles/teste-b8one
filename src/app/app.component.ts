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
      id: 1,
      fav: false,
      formerPrice: 2813.99,
      price: 2599.00,
      photoPath:'assets/imgs/product-1.png',
      title: `Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz 
      HDMI, DP, Gsync Série CRG50`,
    },
    {
      add: false,
      id: 2,
      fav: false,
      formerPrice: 4255.44,
      price: 2509.90,
      photoPath:'assets/imgs/product-2.jpg',
      title: `Monitor Gamer Asus TUF 31.5' LED, 165 Hz, 2K QHD, 1ms, FreeSync Premium, HDR 10 - VG32VQ1B`,
    },

  ]
}
