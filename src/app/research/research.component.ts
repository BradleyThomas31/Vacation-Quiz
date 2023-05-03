import { Component } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent {

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
  restaurants = [
    'https://www.timeout.com/newyork/restaurants/100-best-new-york-restaurants',
    'https://travel.usnews.com/features/the-best-restaurants-in-jackson-hole-wyoming',
    'https://nola.eater.com/maps/best-restaurants-new-orleans-38-map-nola',
    'https://miami.eater.com/maps/miami-best-restaurants-38'
       ];
  thingsToDo = [
     'https://www.timeout.com/newyork/things-to-do/101-things-to-do-in-new-york',
     'https://www.busytourist.com/things-to-do-in-montana/',
     'https://www.tripadvisor.com/Attractions-g60864-Activities-New_Orleans_Louisiana.html',
     'https://www.tripadvisor.com/Attractions-g34438-Activities-Miami_Florida.html'
       ];
  history = [
    'https://www.history.com/topics/us-states/new-york-city',
    'https://www.britannica.com/place/Montana-state/History',
    'https://www.neworleans.com/things-to-do/history/history-of-new-orleans-by-period/',
    'http://archive.miamigov.com/home/history.html'
      ];
  liveMusic = [
   'https://www.theinfatuation.com/new-york/guides/the-best-nyc-bars-with-live-music',
   'https://www.jambase.com/concerts/us/montana',
   'https://www.neworleans.com/events/live-music-calendar/',
   'https://www.eventbrite.com/d/fl--miami/live-music/'
      ];
  nycPics = [
    'https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl-500x500.jpg',
    'https://i.ytimg.com/vi/uYWTfPBx9W4/maxresdefault.jpg',
    'https://static01.nyt.com/images/2019/12/22/arts/22FINALES1/22FINALES1-videoSixteenByNineJumbo1600.jpg'
  ];
  montanaPics = [
    'https://www.seriouseats.com/thmb/WzQz05gt5witRGeOYKTcTqfe1gs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/butter-basted-pan-seared-steaks-recipe-hero-06-03b1131c58524be2bd6c9851a2fbdbc3.jpg',
    'https://www.tripsavvy.com/thmb/_aVc0DcJYSJuw-ts_6wo3NehZ68=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/glacier-national-park-night-stars-reflection-in-scenic-lake-montana-488412926-d38540a7064a42309f686325570fc90b.jpg',
    'https://fwp.mt.gov/binaries/content/gallery/mtfwpproject/fwpimageset/imagegalleries/stateparks/thompsonfalls/thompsonfallsread.jpg'
      ];   
  newOrleansPics = [
    'http://res.cloudinary.com/simpleview/image/upload/v1619728844/clients/beaumont/73EE5438_3EB1_4F75_86FC_CF423C704AC7_db0f174a-cad2-4c3e-91f8-c30d513f895c.jpg',
    'https://t3.ftcdn.net/jpg/04/83/48/04/360_F_483480471_bHtLHyKezqXjqg2DhXVGapumwKC9Xhz8.jpg',
    'https://res.cloudinary.com/simpleview/image/upload/v1503604613/clients/neworleans/NOTMC_13955_11d443b2-d0d5-403a-bbf1-440b685b7afb.jpg'
  ];   
  miamiPics = [
    'https://theplanetd.com/images/Best-Cuban-Food-Cuisine.jpg',
    'https://www.tripsavvy.com/thmb/bW7D8OPq4CYknBRPvm3dxYH9iBM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ocean-drive-and-art-deco-district-in-south-beach--miami-at-night--florida--usa-1143504696-a7a3fe2894e843b0b87e25f00a2dddaf.jpg',
    'https://media.zenfs.com/en/miami_herald_mcclatchy_975/8080ef6fe3d6303789c19dc449cde3a5'
      ]; 
}
