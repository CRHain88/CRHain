import eqjs from 'eq.js';
import CRHainDistributedColumns from './distributed-columns.js';

class CRHainOfferings {
    constructor () {
        this.distributedColumns = new CRHainDistributedColumns('[data-offerings-container]', {
            columnSelector: '[data-offering]'
        });

        this.currentEqDetail = null;

        this.attachEventListener();
    }

    attachEventListener() {
        this.distributedColumns.columnsContainer.addEventListener('eqResize', (event) => {
            if (this.currentEqDetail !== event.detail) {
                this.currentEqDetail = event.detail;
                this.processEqState();
            }
        });
    }

    processEqState() {
        switch (this.currentEqDetail) {
            case 'three-column':
                this.updateColumnCount(3);
                break;
            default:
                this.updateColumnCount(1);
        }
    }

    updateColumnCount(newColumns) {
        this.distributedColumns.updateColumnCount(newColumns);
    }
}

var crhainOfferings = new CRHainOfferings();
