import { LightningElement, track } from 'lwc';
export default class ModalPopup extends LightningElement {
  @track isModalOpen = false;
  openModal() {
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
  }
  submitDetails(){
    this.isModalOpen = false;
  }

  @track isSelected;
  opcaoSolicitacao = document.getElementsByName("opcao");

  handleLikeButtonClick(){
    // alert("test");
    this.isSelected = !this.isSelected;
  }
}