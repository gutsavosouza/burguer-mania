import { Component, inject, OnInit } from '@angular/core';
import { HamburguersListComponent } from "../../components/hamburguers-list/hamburguers-list.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [HamburguersListComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  parsedCategory: string = '';
  title = 'CARDÁPIO';

  constructor () {
    this.parsedCategory = String(this.route.snapshot.params['category']);
  }

  ngOnInit(): void {
      if(this.parsedCategory !== 'all') {
        this.title = this.parsedCategory;
      }
  }
}
