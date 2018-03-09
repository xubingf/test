import {Injectable} from "@angular/core";
import {Hero} from "./Hero";
import "rxjs/add/operator/toPromise";
import {Heroes} from "./mock-hero";


@Injectable()
export class HeroService {

  heroes: Hero[];
  result: Hero;
  getHeroes(): Promise<Hero[]> {

    return Promise.resolve(Heroes); // 传入解析后的模拟数据
  }

  getHero(id: number): Promise<Hero>{
    return this.getHeroes()
      .then(heroes =>heroes.find(hero => hero.id ===id));
  }
  addHero(name: string): Promise<Hero[]> {
    name = name.trim();
    for(let x=0;x<Heroes.length;x++){
      if(Heroes[x].name ===name)
      {
        alert("hero已存在");
        return;
      }
    }
    if(!name){ return;}
    else {
      if (Heroes.length === 0)
      {
        var id=1;
        var height=111;
      }
      else {
         id = Heroes[Heroes.length-1].id+1;
         height = Heroes[Heroes.length-1].height+1;
      }
      console.log(Heroes[Heroes.push({id,name,height})-1]);
      return Promise.resolve(Heroes);
    }
  }
  searchhero(mes:string): Hero {
    this.result =Heroes.find(hero =>hero.name ===mes);
    if(this.result){
      return (this.result);
    }else {
      alert("无目标");
      return;
    }

  }
  deletehero(hero:Hero) {
    for(let x=0;x<Heroes.length;x++){
      if(Heroes[x].name ===hero.name)
      {
        Heroes.splice(x,1);
      }
    }
  }

}
