import '@lwc/synthetic-shadow';
import { LightningElement, api, track } from 'lwc';

export default class PathStep extends LightningElement {
    @api phaseClass = '';
    @api phaseTitle = '';
}
