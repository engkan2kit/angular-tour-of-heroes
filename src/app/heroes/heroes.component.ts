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
    _id:"1",
    name: 'Windstorm'
  };
  heroes: Hero[];

  constructor(private heroService: HeroService) { }
  //private http: HttpClient
  ngOnInit() {
    //this.http.get('/hero').subscribe(data => {
    //  this.heroes = data;
    //});
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
