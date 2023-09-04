import { Component , OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, OnDestroy {
  interval: any=0;

  ngOnInit(){
    let banner= document.getElementById('banner')
    console.log(banner, 'nnnn');
    let count=1
   this.interval =  setInterval(()=>{
      if(count == 1){
        count=2
        banner!.style.backgroundImage = `url('../../../assets/images/banner-${count}.png')`
      } else{
        count=1
        banner!.style.backgroundImage = `url('../../../assets/images/banner-${count}.png')`
      }
    },5000)
  }
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
