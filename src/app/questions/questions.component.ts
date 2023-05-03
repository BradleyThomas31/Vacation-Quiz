import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent {

  questionNumber = 0;
  q1Images = [
    'https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl-500x500.jpg',
    'https://i.ytimg.com/vi/uYWTfPBx9W4/maxresdefault.jpg',
    'https://static01.nyt.com/images/2019/12/22/arts/22FINALES1/22FINALES1-videoSixteenByNineJumbo1600.jpg'
  ];
  q2Images = [
    'https://www.seriouseats.com/thmb/WzQz05gt5witRGeOYKTcTqfe1gs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/butter-basted-pan-seared-steaks-recipe-hero-06-03b1131c58524be2bd6c9851a2fbdbc3.jpg',
    'https://www.tripsavvy.com/thmb/_aVc0DcJYSJuw-ts_6wo3NehZ68=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/glacier-national-park-night-stars-reflection-in-scenic-lake-montana-488412926-d38540a7064a42309f686325570fc90b.jpg',
    'https://fwp.mt.gov/binaries/content/gallery/mtfwpproject/fwpimageset/imagegalleries/stateparks/thompsonfalls/thompsonfallsread.jpg'
  ];
  q2Text = [
    "Steak",
    'https://www.tripsavvy.com/thmb/_aVc0DcJYSJuw-ts_6wo3NehZ68=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/glacier-national-park-night-stars-reflection-in-scenic-lake-montana-488412926-d38540a7064a42309f686325570fc90b.jpg',
    'https://fwp.mt.gov/binaries/content/gallery/mtfwpproject/fwpimageset/imagegalleries/stateparks/thompsonfalls/thompsonfallsread.jpg'
  ];
  q3Images = [
    'http://res.cloudinary.com/simpleview/image/upload/v1619728844/clients/beaumont/73EE5438_3EB1_4F75_86FC_CF423C704AC7_db0f174a-cad2-4c3e-91f8-c30d513f895c.jpg',
    'https://t3.ftcdn.net/jpg/04/83/48/04/360_F_483480471_bHtLHyKezqXjqg2DhXVGapumwKC9Xhz8.jpg',
    'https://res.cloudinary.com/simpleview/image/upload/v1503604613/clients/neworleans/NOTMC_13955_11d443b2-d0d5-403a-bbf1-440b685b7afb.jpg'
  ];
  q4Images = [
'https://theplanetd.com/images/Best-Cuban-Food-Cuisine.jpg',
'https://www.tripsavvy.com/thmb/bW7D8OPq4CYknBRPvm3dxYH9iBM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ocean-drive-and-art-deco-district-in-south-beach--miami-at-night--florida--usa-1143504696-a7a3fe2894e843b0b87e25f00a2dddaf.jpg',
'https://media.zenfs.com/en/miami_herald_mcclatchy_975/8080ef6fe3d6303789c19dc449cde3a5'
  ];
  questions = [
    'What would be your favorite meal?',
    'Where would you rather be?',
    'What would you rather do?'
      ];
  counter = 0;
  onNext(num: number) {
      this.counter += num;
      this.questionNumber++;
      sessionStorage.setItem('counter', this.counter.toString());
  }
}
