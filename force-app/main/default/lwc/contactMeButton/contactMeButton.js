import { LightningElement } from 'lwc';
import createLead from '@salesforce/apex/ContactMeController.createLead';
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class ContactMeButton extends LightningElement {

    dialog;

    firstName;
    lastName;
    company;
    email;
    description;
    snackbar;

    changeHandler(){
        this.firstName = this.template.querySelector('.firstname').value;
        this.lastName = this.template.querySelector('.lastname').value;
        this.company = this.template.querySelector('.company').value;
        this.email = this.template.querySelector('.email').value;
        this.description = this.template.querySelector('.description').value;
    }

    renderedCallback() {
       

        this.dialog =  this.template.querySelector('.contact-dialog');
        this.firstName = this.template.querySelector('.firstname').value;
        this.lastName = this.template.querySelector('.lastname').value;
        this.company = this.template.querySelector('.company').value;
        this.email = this.template.querySelector('.email').value;
        this.description = this.template.querySelector('.description').value;

        console.log(this.firstName);
    }
    showDialog() {
        this.dialog.showModal();
    }

    closeDialog() {
        this.dialog.close();
    }

    handleSubmit(event) {
        console.log('ddddddddddddddddddddddddddddddddddddddd');
        event.preventDefault();
        console.log('firstnameValue = ' + this.firstName);
        const firstnameValue = this.firstName;
        const lastnameValue = this.lastName;
        const companyValue = this.company;
        const emailValue = this.email;
        const descriptionValue = this.description;

        
        createLead({firstName: firstnameValue, 
                    lastName: lastnameValue, 
                    company: companyValue, 
                    email: emailValue, 
                    description: descriptionValue})
                    .then(result => {
                        console.log('result = ' + result);
                       // this.showNotification('Success', 'Details submitted successfully', 'success');
                       this.snackbar = this.template.querySelector('c-snackbar');
                       this.snackbar.showSnackBar('Your request has been received.');
                       this.dialog.close();
                    })
                    .catch(error => {
                        console.log('error = ' + JSON.stringify(error));
                    })
                           
    }

    showNotification(titleText,messageText,variant) {
        console.log('tost test');
        alert('tost test');
        const evt = new ShowToastEvent({
          title: titleText,
          message: messageText,
          variant: variant,
        });
        this.dispatchEvent(evt);
      }
}