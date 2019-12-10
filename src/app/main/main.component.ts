import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Page } from '../dummy';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public planetsPage$: Observable<Page>;
  public searchForm: FormControl = new FormControl('');

  constructor(private _service: MainService) { }

  ngOnInit() {
   this.planetsPage$ = this._service.getPlanetsPage(1);
  }

  onPageChanged (url: string) {
    this.planetsPage$ = this._service.getPlanetsPageByURL(url);
  }

  onSearchValueChanges(inputElement: HTMLInputElement) {
    this.searchForm.valueChanges
    .pipe(
      debounceTime(400),
      distinctUntilChanged()
    )
    .subscribe(name => {
      this.planetsPage$ = this._service.getPlanetsPageByName(name);
    });
  }

}
