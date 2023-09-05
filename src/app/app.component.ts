import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import AOS from 'aos'; //AOS - 1

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  services = [
    {
      title: 'campaign strategy',
      text: "We brand your values and thoughts to influence people’s voting decisions. Our mission is to create a strong public image and build an online presence in a way that society likes. Our aim is to reach the right audience!"
    },
    {
      title: 'digital strategy',
      text: "We create and maintain the website and social media accounts by engaging people with the right message which includes sharing content, answering queries, and rallying support. Leading digitally, governing effectively!"
    },
    {
      title: 'Advertisement',
      text: "We create novel advertisements to increase your winning probability. We write unique content that motivates people to elect you. Our expert team makes you win with effective strategies. Do innovations instead of advertising!"
    },
    {
      title: 'creative video',
      text: "Our video advertisements will speak for your victory! We focus on quality, content, and images to attract the audience. Our team works to create an impact on your identity. We deliver great things every time!"
    },
    {
      title: 'data & analytics',
      text: "We employ pre-poll and opinion-poll analysis to understand public sentiment and vote preferences. Based on this, we create marketing strategies to achieve electoral success. Analyze - Predict - Achieve."
    },
    {
      title: 'Crisis management',
      text: "Our team will offer timely support and advice to help minimize the effects of any online crises or difficulties. We use proactive techniques to reduce the spread of fraud and safeguard your reputation. Finding solutions in every storm."
    },
  ];

  politicalWorks=[
    {
      count:"02",
      name:'Ministers',
      party:'DMK party',
      bg:'#a21ebe'
    },
    {
      count:"04",
      name:'District Secretary',
      party:'DMK party',
      bg:'#c04de2'
    },
    {
      count:"02",
      name:'MLA',
      party:'DMK party',
      bg:'#1ebe99'
    },
    {
      count:"05",
      name:'Mayor & Chairman',
      party:'DMK party',
      bg:'#1ebabe'
    },
  ]

  constructor( private metaTagService: Meta){
metaTagService.addTags([
  { name: 'keywords', content: 'political work, political work!, Campaign strategy, Digital strategy, video advertisements, marketing strategies, Crisis management, branding, digital presence,marketing, advertising, party,political,party,tamil nadu politics' },
  { name: 'robots', content: 'index, follow' },
  { name: 'author', content: 'Political WOrks' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  { name: 'date', content: '2023-09-03', scheme: 'YYYY-MM-DD' },
  { charset: 'UTF-8' }
]);
  }

  ngOnInit(){
    AOS.init({disable: 'mobile'});//AOS - 2
    AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }
}
