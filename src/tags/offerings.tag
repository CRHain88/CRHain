<offerings>
    <h1>What I Offer</h1>
    <dl class="offerings" data-offerings-container data-eq-pts="three-column: 767">
        <div class="offering" data-offering>
            <dt>Design and development.</dt>
            <dd>Online and offline. Print and digital.</dd>
        </div>
        <div class="offering" data-offering>
            <dt>Big picture ideas.</dt>
            <dd>Imagine having a website that works with your other marketing efforts on facebook, print ads, etcetera. It could be cool.</dd>
        </div>
        <div class="offering" data-offering>
            <dt>Core web competencies.</dt>
            <dd>SEO. Analytics. Responsive Design. Oh! and websites that "pop".</dd>
        </div>
        <div class="offering" data-offering>
            <dt>User-focused design.</dt>
            <dd>Really, this is marketing, but I want to emphaisize that main goal is giving the users what they want. Or... giving them what you want in a way they want it. ;)</dd>
        </div>
        <div class="offering" data-offering>
            <dt>My cellphone number!</dt>
            <dd>Seriously. No need to settle for "we'll reply to your email in 24-48 hours". (610) 568-6038.</dd>
        </div>
        <div class="offering" data-offering>
            <dt>The other things.</dt>
            <dd>If your project requires photography, video editing, custom illustration, or whatever else you can think of, I know a few people who can help.</dd>
        </div>
        <div class="offering" data-offering>
            <dt>Consulting.</dt>
            <dd>Maybe you already have a web person and you don't really want to let them go because they're nice and have been with you since day one. I get it. They just need a few fresh ideas, maybe. Some inspiration.</dd>
        </div>
        <div class="offering" data-offering>
            <dt>Retainers.</dt>
            <dd>Need regular designs but don't want a full-time designer? We can work something out.</dd>
        </div>
        <div class="offering offering--empathy" data-offering>
            <dt>Empathy.</dt>
            <dd>If you're a little obsessive compulsive and need a ninth offering here just so the section is even, I got you. Like I wrote earlier, I call that user-focused design. View the page on your phone and you won't even see this paragraph.</dd>
        </div>
    </dl>

    <style scoped>
        dd,
        dt {
            display: inline;
        }

        dt {
            font-weight: 900;
        }

        dt:after {
            content: " ";
        }

        dd {
            margin: 0;
        }

        .offering + .offering {
            margin-top: 15px;
        }

        .offering--empathy {
            display: none;
        }

        [data-eq-state="three-column"] .offering--empathy {
            display: block;
        }
    </style>

    <script type="babel">
    import eqjs from 'eq.js';
    import CRHainDistributedColumns from '../js/distributed-columns.js';

    this.on('mount', () => {
        var crhainOfferings = new CRHainOfferings();
    });

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

    </script>

</offerings>
