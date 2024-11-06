// Add custom public note to Unpaywall ViewIt links
  app.component('prmAlmaViewitItemsAfter', {
    bindings: { parentCtrl: '<'},
    controller: function ($timeout) {
      this.$onInit = function() {
        $timeout(function() { // wrap in a timeout function to give time for elements to render
          const viewitItems = document.querySelectorAll("prm-alma-viewit-items .separate-list-items md-list-item .item-title"); // get item titles of all ViewIt links
          const checkForUnpaywallText = document.querySelectorAll(".unpaywall-viewit-text");
          if (checkForUnpaywallText.length < 1) { // only run if no elements have the unpaywall-viewit-text class name; prevents double links appearing when there are multiple prm-Alma-Viewit-Items-After components
            for (let i=0; i<viewitItems.length; i++) {
              const linkText = viewitItems[i].innerHTML;
              if (linkText.includes("Unpaywall")) {
                const el = viewitItems[i].parentNode;
                // insert public note icon and html
                el.insertAdjacentHTML('afterend', `
                  <p class="text-italic ng-scope weak-text layout-row unpaywall-viewit-text" layout="row">
                    <span flex="none" class="flex-none">
                      <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="public_note">
                        <md-icon md-svg-icon="primo-ui:public_note" role="presentation" class="md-primoExplore-theme">
                          <svg id="public_note_cache115" width="100%" height="100%" viewBox="0 0 24 24" y="1368" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                            <path d="M14,10V4.5L19.5,10M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V9L15,3H5Z"></path>
                          </svg>
                        </md-icon>
                      </prm-icon>
                    </span>
                    <span id="public-note" role="button">Unpaywall data may be inaccurate. If item isn't freely available, please use a different <em>View Online</em> link (if available) or place a <a href="https://library.buffalo.edu/delivery/" target="_blank" onclick="window.open(this.href)"><em>Delivery+</em> request</a>.</span>
                  </p>
                  `);
              }
            }
          }
        }, 500); // sets timeout to 500ms (0.5 seconds)
      };
    }
  });
