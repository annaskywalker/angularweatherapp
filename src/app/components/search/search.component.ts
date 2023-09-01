import { Component, Output, EventEmitter } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchQuery: string = '';
  faSearch = faSearch;
  @Output()
  onSearch: EventEmitter<string> = new EventEmitter();

  doSearch() {
    this.onSearch.emit(this.searchQuery);
    this.searchQuery = '';
  }
}
