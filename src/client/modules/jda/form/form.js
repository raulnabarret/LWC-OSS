import '@lwc/synthetic-shadow';
import { LightningElement, api, track } from 'lwc';
import { validate } from '@babel/types';

export default class Form extends LightningElement {
    data = ['187376', '177459', '186834', '188927', '204192'];
    @api isValidCodeNumber = false;
    @api codeNumber = '';
    isEmptyCodeNumber = false;
    isInvalidCodeNumberLength = false;
    isNonexistentCodeNumber = false;
    codeNumberErrorMessage = '';

    submitValue() {
        this.validateCodeNumber();
        if (this.isValidCodeNumber) {
            this.dispatchEvent(
                new CustomEvent('validcodenumber', {
                    detail: {
                        codeNumber: this.codeNumber,
                        isValidCodeNumber: this.isValidCodeNumber
                    }
                })
            );
        }
    }

    resetValue() {
        this.isValidCodeNumber = false;
        this.codeNumber = '';
        this.dispatchEvent(
            new CustomEvent('validcodenumber', {
                detail: {
                    codeNumber: this.codeNumber,
                    isValidCodeNumber: this.isValidCodeNumber
                }
            })
        );
    }

    onCodeNumberChange(e) {
        this.codeNumber = e.target.value;
    }

    validateCodeNumber() {
        var codeNumber = this.codeNumber;

        if (codeNumber === '' || undefined || null) {
            this.isEmptyCodeNumber = true;
            this.displayErrorMessages();
        } else {
            this.isEmptyCodeNumber = false;
            this.displayErrorMessages();
        }

        if (!this.isEmptyCodeNumber && codeNumber.length !== 6) {
            this.isInvalidCodeNumberLength = true;
            this.displayErrorMessages();
        } else {
            this.isInvalidCodeNumberLength = false;
            if (!this.isInvalidCodeNumberLength) {
                this.isNonexistentCodeNumber = !this.data.includes(codeNumber);
                this.displayErrorMessages();
            }
        }
    }

    displayErrorMessages() {
        let form = this.template.querySelector('form div');
        this.isValidCodeNumber =
            !this.isEmptyCodeNumber &&
            !this.isInvalidCodeNumberLength &&
            !this.isNonexistentCodeNumber;
        if (!this.isValidCodeNumber) {
            form.classList.add('slds-has-error');
            this.codeNumberErrorMessage = this.isEmptyCodeNumber
                ? 'This field is required'
                : 'Value is not a valid Code Number';
        } else {
            form.classList.remove('slds-has-error');
            this.codeNumberErrorMessage = '';
            this.isValidCodeNumber = true;
        }
    }
}
