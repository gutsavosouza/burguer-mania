import { Component, inject, Input, OnInit } from '@angular/core';
import Hamburger from '../../interfaces/hamburger';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ButtonComponent } from "../button/button.component";
import { HamburgerService } from '../../services/hamburger.service';

@Component({
  selector: 'app-hamburguers-list',
  standalone: true,
  imports: [CommonModule, CardComponent, ButtonComponent],
  templateUrl: './hamburguers-list.component.html',
  styleUrl: './hamburguers-list.component.css'
})
export class HamburguersListComponent implements OnInit {
  @Input() categoryFilter: string = '';  
  hamburgerService: HamburgerService = inject(HamburgerService);
  hamburgers: Hamburger[] = [];
  displayedHamburgers: Hamburger[] = [];
  itemsToShow: number = 3;
  title = '';

  async ngOnInit(): Promise<void> {
    if(this.categoryFilter !== 'all'){
      this.hamburgers = this.hamburgerService.getHamburgersByTag(this.categoryFilter);
      this.title = this.categoryFilter;
    } else {
      this.hamburgers = await this.hamburgerService.getAllHamburgers(); 
      this.title = 'CARDÁPIO';
    }
    this.displayedHamburgers = this.hamburgers.slice(0, this.itemsToShow);
  }

  showMore(): void {
    this.itemsToShow += 3;
    this.displayedHamburgers = this.hamburgers.slice(0, this.itemsToShow);
  }

  showLess(): void {
    this.itemsToShow = this.itemsToShow - 3;
    if(this.itemsToShow < 3) this.itemsToShow = 3;
    this.displayedHamburgers = this.hamburgers.slice(0, this.itemsToShow);
  }
}
