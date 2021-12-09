import './style.css';
import {slideShow} from "./main";

export const Dom = {
    controls : document.querySelectorAll('.controls'),
    slides : document.querySelectorAll('#slides .slide'),
    playing : true,
    pauseButton : document.getElementById('pause'),
    next : document.getElementById('next'),
    previous : document.getElementById('previous'),
}

export const gallery = new slideShow()
Dom.pauseButton.addEventListener('click', gallery.pause)
Dom.next.addEventListener('click', gallery.nextList)
Dom.previous.addEventListener('click', gallery.previos)
addEventListener('DOMContentLoaded', () => gallery.playSlideshow())
