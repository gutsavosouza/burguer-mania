import { Component, inject, OnInit } from '@angular/core';
import { HamburgerService } from '../../services/hamburger.service';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CardComponent, CommonModule, ButtonComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  categories: string[] = [];
  displayedCategories: string[] = [];
  itemsToShow = 3;
  hamburgerService: HamburgerService = inject(HamburgerService);

  ngOnInit(): void {
      this.categories = this.hamburgerService.getAllCategories();
      this.displayedCategories = this.categories.slice(0, this.itemsToShow);
  }

  showMore(): void {
    this.itemsToShow += 3;
    this.displayedCategories = this.categories.slice(0, this.itemsToShow);
  }

  showLess(): void {
    this.itemsToShow = this.itemsToShow - 3;
    if(this.itemsToShow < 3) this.itemsToShow = 3;
    this.displayedCategories = this.categories.slice(0, this.itemsToShow);
  }
}
