import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() cardTitle: string = 'Card title';
  @Input() cardText: string = 'Card text';
  @Input() imageUrl: string = 'sample-burguer.png';
}