import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-animal-page',
  templateUrl: './animal-page.component.html',
  styleUrls: ['./animal-page.component.scss']
})
export class AnimalPageComponent implements OnInit {
  animal: string = '';
  imgs = ['1', '2', '3', '4'];

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        console.log("params", params)
        this.animal = params.animal ? params.animal : '';
        console.log("this.animal", this.animal)
      }
    );
  }

  navigate(animal: string, img: string) {
    console.log(['selection', {animal: animal, img: img}])
    this.router.navigate(['selection', {animal: animal, img: img}])
  }

}
