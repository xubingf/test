import {Component, OnInit} from "@angular/core";
import {Hero} from "../Hero/Hero";
import {HeroService} from "../Hero/Hero.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export  class DashboardComponent implements OnInit {
  heros: Hero[] = [];
  constructor(private heroService: HeroService,
  private router:Router) { }
  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heros => this.heros = heros.slice(0, 4));
  }
  findhero(heromes:string) {
    if(this.heroService.searchhero(heromes)){
      this.router.navigate(['/hero',this.heroService.searchhero(heromes).id]);
    }
    console.log("查找完毕");

  }
}
