const defaultOptions = {
    columnCount: 1,
    columnSelector: undefined,
    className: 'column'
};

export default class CRHainDistributedColumns {
    constructor(containerElement, options) {
        this.columnsContainer = document.querySelector(containerElement);
        this.options = Object.assign({}, defaultOptions, options);
        this.columnNodes = document.querySelectorAll(this.options.columnSelector);

        this.addContainerStyles();
        this.updateColumnCount();
    }

    get columnStyleString() {
        const width = `${Math.floor(100 / this.columns.length)}%`;

        // @TODO Verify this works in IE
        let styleString = '';
        styleString += `-webkit-flex-basis: ${width}; `;
        styleString += `-ms-flex-preferred-size: ${width}; `;
        styleString += `flex-basis: ${width}; `;
        styleString += `max-width: ${width}; `;
        styleString += `padding: 0 .5rem;`;

        return styleString;
    }

    get containerStyleString() {
        let styleString = '';
        styleString += 'display: flex; ';
        styleString += 'flex-direction: row; ';
        styleString += 'justify-content: space-between; '
        styleString += 'margin: 0 -.5rem;'

        return styleString;
    }

    updateColumnCount(newCount = this.options.columnCount) {
        this.options.columnCount = newCount;

        this.columns = this.setColumns();
        this.addColumnStyles();
        this.addContentToAppropriateColumn();
        this.emptyColumnContainerDOM();
        this.addColumnContainerToDOM();
    }

    setColumns() {
        let columns = [];

        for (let i = 0; i < this.options.columnCount; i++) {
            let div = document.createElement('div');
            div.className = this.options.className;

            columns.push(div);
        }

        return columns;
    }

    addContentToAppropriateColumn() {
        const numberOfItems = this.columnNodes.length;
        const numberOfColumns = this.columns.length;

        let currentColumn = 0;

        for (let i = 0; i < numberOfItems; i++) {
            this.columns[currentColumn].appendChild(this.columnNodes[i]);

            currentColumn++;

            if (currentColumn >= numberOfColumns) {
                currentColumn = 0;
            }
        }
    }

    addColumnContainerToDOM() {
        for (let i = 0; i < this.columns.length; i++) {
            this.columnsContainer.appendChild(this.columns[i]);
        }
    }

    emptyColumnContainerDOM() {
        while (this.columnsContainer.hasChildNodes()) {
            this.columnsContainer.removeChild(this.columnsContainer.lastChild);
        }
    }

    addContainerStyles() {
        this.columnsContainer.style = this.containerStyleString;
    }

    addColumnStyles() {
        for (let i = 0; i < this.columns.length; i++) {
            this.columns[i].style = this.columnStyleString;
        }
    }
}
