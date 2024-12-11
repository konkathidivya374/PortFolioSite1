import { api, LightningElement } from 'lwc';

export default class Snackbar extends LightningElement {

    snakbarMessage;
    @api
    showSnackBar(message) {
        console.log(message);
        this.snakbarMessage = message;
        // Get the snackbar DIV
        const snakbar = this.template.querySelector(".snackbar");
      
        // Add the "show" class to DIV
        snakbar.classList.add('show');
        console.log(snakbar);

        // After 3 seconds, remove the show class from DIV
        setTimeout(() =>{
              snakbar.classList.remove("show"); 
            }, 2800);
      }
}