import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

selectedImage: string = '';
isModalOpen: boolean = false;

openModal(imageSrc: string) {
  this.selectedImage = imageSrc;
  this.isModalOpen = true;
}

closeModal() {
  this.isModalOpen = false;
}


}
