import '@lwc/synthetic-shadow';
import { LightningElement, api, track } from 'lwc';

export default class Wrapper extends LightningElement {
    @track codeNumber = '';
    @track isValidCodeNumber = false;

    handleValidCodeNumber(e) {
        this.codeNumber = e.detail.codeNumber;
        this.isValidCodeNumber = e.detail.isValidCodeNumber;
    }
}
