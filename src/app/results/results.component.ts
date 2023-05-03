import { Component, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  counter: number;
  destinationNum: number;
  constructor() {
    const counterString = sessionStorage.getItem('counter');
    if (counterString) {
      this.counter = parseInt(counterString);
    } else {
      this.counter = 0;
    }
    if(this.counter <= 3) {
      this.destinationNum = 0;
    }
    else if(this.counter <= 6){
      this.destinationNum = 1;
    }
    else if(this.counter <= 9){
      this.destinationNum = 2;
    }
    else {
      this.destinationNum = 2;
    }
  }
  places = [
    'New York City',
    'Montana',
    'New Orleans',
    'Miami'
      ];
  descriptions = [
    'New York is the largest city in the US. It is known for amazing food, museums, concerts, and shows',
    'Montana is known for its, nature, parks, and nature',
    'New Orleans is one of the oldest cities in the US, and is known for a wide variety of bars and nightlife',
    'Miami is well known for its beaches and nightlife'
      ];
  images = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg',
    'https://www.tripsavvy.com/thmb/okMvzYQBKK-Gu65ZDNm4VmJhiZ4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/IMG_7197-8df7e56ea16a437bae148dbd73b9ec1e.jpg',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/37/fb/cb/img-20180809-wa0259-largejpg.jpg?w=1200&h=1200&s=1',
    'https://i.natgeofe.com/n/5de6e34a-d550-4358-b7ef-4d79a09c680e/aerial-beach-miami-florida_16x9.jpg'
      ];

}

  
  