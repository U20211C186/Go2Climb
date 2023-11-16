import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Iservice } from 'src/app/models/service';
import { AgencyService } from 'src/app/services/agency-service.service';
import { ServicesService } from 'src/app/services/services-service.service';

interface Response {
  content: any[];
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchWord : any;
  results: Iservice[] = [];
  agency: String[] = [];
  filtered : Iservice[] = [];
  response: Response = {content: []}

  max = 1000;
  min = 0;
  step = 1;
  minPrice = 0;
  maxPrice = 650;
  rating = 0;





  constructor(private route: ActivatedRoute, private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.getSearchResults();
  }

  getSearchResults() {
    this.searchWord = this.route.params.pipe(
      )
      this.searchWord = this.searchWord._value.text
    console.log(this.searchWord);

    return this.servicesService.searchService(this.searchWord)
    .subscribe(data => {
      this.response = data;
      this.results = this.response.content;
      this.filtered = this.results;
      console.log(this.results);
      //console.log(this.filtered);
    })
  }

  filterResults(){
    this.filtered = this.results.filter(result => {
      return result.score >= this.rating && result.price>=this.minPrice && result.price<=this.maxPrice;
    })
    //console.log(this.filtered);
  }
  clear(){
    this.filtered = this.results;
  }

}


