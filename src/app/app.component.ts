import { Component, OnInit } from '@angular/core';

import { QuoteService } from './quote.service';
import { Quote } from './quote';

@Component({
  selector: 'rq-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currentQuote: Quote = {quoteBody: " ", author: " "}
 
  ngOnInit() {
    this.newQuote();
  }

  constructor(private quoteService: QuoteService) {};

  newQuote() {
    this.quoteService.getQuote().subscribe( 
      (response)=>{
        console.log(response);
        this.currentQuote.author=response.author;
        this.currentQuote.quoteBody=response.quote;
      });
   }

}
