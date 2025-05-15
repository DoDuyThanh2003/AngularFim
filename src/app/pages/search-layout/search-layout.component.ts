import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-layout',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './search-layout.component.html',
  styleUrl: './search-layout.component.scss'
})
export class SearchLayoutComponent implements OnInit {
  searchQuery: string = '';
  constructor(private router : Router) {}
  ngOnInit(): void {
     
  }
  onSearch() {
    if (this.searchQuery.trim()) {
      console.log("Search query:", this.searchQuery);
      this.router.navigate(['/search'], {
        queryParams: { query: this.searchQuery }
      });
    }
    else {
      alert("Vui lòng nhập để tìm kiếm")
    }
  }
}

