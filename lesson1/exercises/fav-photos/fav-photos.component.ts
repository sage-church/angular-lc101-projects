import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Cool Pics';
  image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFmSvhNL9uUy7ji4YkjMUJrfqjnL1deqvlg&usqp=CAU';
  image2 = 'https://arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/OQLRDGWQ24SGQS3D5BDXJEBTKY.jpg';
  image3 = 'https://media.cntraveler.com/photos/58d91937bf12f06bcf42e632/16:9/w_2560%2Cc_limit/GettyImages-480857752.jpg';

  constructor() { }

  ngOnInit() {
  }

}