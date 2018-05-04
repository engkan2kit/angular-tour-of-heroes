import { Component, OnInit,Injectable } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

@Injectable()
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id:1,
    name: 'Windstorm'
  };
  heroes: any;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/hero').subscribe(data => {
      this.heroes = data;
    });
  }

}
