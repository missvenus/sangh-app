import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {
  public slides = [
    {'src': "../../assets/anu-image/image1.jpg", 'alt': "jai umesh", 'text': "string" },
    {'src': "../../assets/anu-image/image2.jpg", 'alt': "jai umesh", 'text': "string" },
    {'src': "../../assets/anu-image/image3.jpg", 'alt': "jai umesh", 'text': "string" },
    {'src': "../../assets/anu-image/image4.jpg", 'alt': "jai umesh", 'text': "string" },
    {'src': "../../assets/anu-image/image5.jpg", 'alt': "jai umesh", 'text': "string" },
    {'src': "../../assets/anu-image/image6.jpg", 'alt': "jai umesh"},
    {'src': "../../assets/anu-image/image7.jpg", 'alt': "jai umesh"},
    {'src': "../../assets/anu-image/image8.jpg", 'alt': "jai umesh"}
  ];

  currentSlide = 0;
  constructor() { }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

  ngOnInit(): void {
  }

}
