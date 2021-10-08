import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-animal-selection',
  templateUrl: './animal-selection.component.html',
  styleUrls: ['./animal-selection.component.scss']
})
export class AnimalSelectionComponent implements OnInit {
  animal = ''
  img = ''

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        console.log("params", params)
        this.animal = params.animal ? params.animal : '';
        this.img = params.img ? params.img : '';
        console.log("this.animal", this.animal)
        console.log("this.img", this.img)
      }
    );
  }

}
