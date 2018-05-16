import { Component, OnInit,Injectable } from '@angular/core';
import { Hero } from '../hero';
import { HttpClient } from '@angular/common/http';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

@Injectable({
  providedIn: 'root',
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id:1,
    name: 'Windstorm'
  };
  heroes: Hero[];
  selectedHero: Hero;
  

  constructor(private heroService: HeroService) { }
  //private http: HttpClient
  ngOnInit() {
    //this.http.get('/hero').subscribe(data => {
    //  this.heroes = data;
    //});
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
