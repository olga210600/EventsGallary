import {Dom} from './index';
import './style.css';
import {gallery} from "./index";

export class slideShow {
    currentSlide = 0;
    interval = null;

    slideInterval(isPlaying) {
        if (isPlaying) {
            this.interval = setInterval(() => this.nextSlide(),2000);
        } else {
            clearInterval(this.interval)
        }
    }

    next() {
        for (let i = 0; i < Dom.controls.length; i++) {
            Dom.controls[i].style.display = 'inline-block';
        }
    }

    nextSlide() {
        this.goToSlide(this.currentSlide + 1);
    }

    previousSlide() {
        this.goToSlide(this.currentSlide - 1);
    }

    goToSlide(n) {
        Dom.slides[this.currentSlide].className = 'slide';
        this.currentSlide = (n + Dom.slides.length) % Dom.slides.length;
        Dom.slides[this.currentSlide].className = 'slide showing';
        this.next()
    }

    pauseSlideshow() {
        Dom.pauseButton.innerHTML = '&#9658;';
        Dom.playing = false;
        this.slideInterval(Dom.playing)
    }

    playSlideshow() {
        Dom.pauseButton.innerHTML = '&#10074;&#10074;';
        Dom.playing = true;
        this.slideInterval(Dom.playing)
    }

    pause(){
        if (Dom.playing) {
            gallery.pauseSlideshow();
        } else {
            gallery.playSlideshow();
        }
    }

    nextList(){
        gallery.pauseSlideshow()
        gallery.nextSlide();
    }

    previos(){
        gallery.pauseSlideshow();
        gallery.previousSlide();
    }
}


