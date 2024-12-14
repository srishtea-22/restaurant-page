import "./styles.css";
import { loadPage } from "./loadPage";
import { menu } from "./menu";
import { contact } from "./contact";

document.addEventListener('DOMContentLoaded', loadPage);

const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', loadPage);

const menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click', menu);

const contactBtn = document.getElementById('contact');
contactBtn.addEventListener('click', contact);