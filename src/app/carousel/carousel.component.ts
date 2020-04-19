import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  public slides = [
    {'src': "../../assets/anu-image/image1.jpg", 'alt': "jai umesh", 'text': "string" },
    {'src': "../../assets/anu-image/image2.jpg", 'alt': "jai umesh"},
    {'src': "../../assets/anu-image/image3.jpg", 'alt': "jai umesh"},
    {'src': "../../assets/anu-image/image4.jpg", 'alt': "jai umesh"}
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
