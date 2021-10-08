import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing-grid',
  templateUrl: './landing-grid.component.html',
  styleUrls: ['./landing-grid.component.scss']
})
export class LandingGridComponent implements OnInit {

  animals = ['cats', 'dogs', 'owls', 'koalas']

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigate(animal: string) {
    this.router.navigate(['main/animal', {animal: animal}])
  }

}
