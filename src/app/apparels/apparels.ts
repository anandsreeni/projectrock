import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Carosel } from "../carosel/carosel";
import { Cards } from "../cards/cards";

@Component({
  selector: 'app-apparels',
  imports: [RouterLink, Carosel, Cards],
  templateUrl: './apparels.html',
  styleUrl: './apparels.css'
})
export class Apparels {

}
