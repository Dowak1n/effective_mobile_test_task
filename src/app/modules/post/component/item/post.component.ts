import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CurrencyDataApiService} from "../../../../shared/services/currencyDataApi.service";


@Component({
  selector: 'item-component',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})

export class PostComponent implements OnInit{
  post: any;
  isLoading: boolean = true;
  constructor(private route: ActivatedRoute, private currencyApi: CurrencyDataApiService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.currencyApi.getPostById(Number(id)).subscribe((data: any) => {
        this.post = data;
        this.isLoading = false;
      });
    }
  }
}
