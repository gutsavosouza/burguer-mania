import { Component, inject, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HamburgerService } from '../../services/hamburger.service';
import Hamburger from '../../interfaces/hamburger';
import { ButtonComponent } from "../../components/button/button.component";
import { Title } from '@angular/platform-browser';
import { CommonModule, CurrencyPipe, registerLocaleData } from '@angular/common';
import localePtBr from '@angular/common/locales/pt';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
  providers: [CurrencyPipe]
})
export class DetailComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  hamburgerService: HamburgerService = inject(HamburgerService);
  titleService: Title = inject(Title);
  currencyPipe: CurrencyPipe = inject(CurrencyPipe);
  parsed_id: string = '';
  hamburger: Hamburger | undefined;
  

  constructor() {
    this.parsed_id = String(this.route.snapshot.params['id']);
  }

  async ngOnInit(): Promise<void> {
    this.hamburger = await this.hamburgerService.getHamburgerById(this.parsed_id); 
    if(this.hamburger) {
      this.titleService.setTitle(this.hamburger?.hamburger_name); 
    }
     
  }
}
