import '@lwc/synthetic-shadow';
import { LightningElement, api, track } from 'lwc';

export default class Modal extends LightningElement {
    @api step = {};

    connectedCallback() {}

    get yellowRiskTrackerCollor() {
        return this.step.riskTracker === 'YELLOW';
    }

    get greenRiskTrackerCollor() {
        return this.step.riskTracker === 'GREEN';
    }

    handleSelectedContact(e) {
        let contactdId = e.currentTarget.dataset.identifier;
        this.dispatchEvent(
            new CustomEvent('selectedcontact', { detail: contactdId })
        );
    }

    handleCloseStepModal() {
        this.dispatchEvent(new CustomEvent('closestepmodal'));
    }
}
