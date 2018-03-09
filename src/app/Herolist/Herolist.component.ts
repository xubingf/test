import {Component, OnInit} from "@angular/core";
import {Hero} from "../Hero/Hero";
import {HeroService} from "../Hero/Hero.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-herolist',
  templateUrl: './herolist.component.html'
})
export class HerolistComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }
  constructor(private  heroService: HeroService, private router: Router) { }
  choose(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes =>
      this.heroes = heroes);
  }
  gotohero(): void {
    this.router.navigate(['/hero', this.selectedHero.id]);
  }
  add(hero: string): void{
    this.heroService.addHero(hero);
  }
  deletehero(hero:Hero) {
    this.heroService.deletehero(hero);
  }
}
