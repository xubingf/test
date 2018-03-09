import 'rxjs/add/operator/switchMap';
import {Component, Input, OnInit} from '@angular/core';
import {Hero} from './Hero';
import {ActivatedRoute, ParamMap, Params} from '@angular/router';
import {HeroService} from './Hero.service';
import {Location} from "@angular/common";


@Component({
  selector: 'app-hero-height',
  templateUrl: './Hero.component.html',
  //styleUrls: ['./Hero.component.css']
})
export class HeroComponent implements OnInit {
 hero: Hero;
 constructor(private  route: ActivatedRoute,
             private heroService: HeroService,
             private location: Location) { }

 ngOnInit(): void {
    this.route.paramMap
     .switchMap((params: ParamMap) => this.heroService.getHero(+params.get("id")))
     .subscribe(hero => this.hero = hero);
 }
 goback() {
  this.location.back();
 }

}
