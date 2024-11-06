// Add Newspaper search to resource filter bar
  app.component('prmResourceTypeFilterBarAfter', {
    bindings: { parentCtrl: '<'},
    controller: function () {
      this.$onInit = function (angularLoad, $http, $scope, $element, $timeout, $window) {
        var row = document.querySelector('prm-resource-type-filter-bar .box.layout-row');
        let html = `
          <button id="newspaperSearchBtn" onclick="runNewspaperSearch()" class="resource-type-option md-button md-primoExplore-theme md-ink-ripple" type="button" aria-label="Click to go to Newspaper Search">
            <div>
            <prm-icon icon-type="svg" svg-icon-set="primo-resource-type" icon-definition="newspaper_articles" fall-back-definition="newspaper_articles"><!---->
              <md-icon ng-if="($ctrl.iconDefinition &amp;&amp; !$ctrl.isCustom &amp;&amp; !$ctrl.isEmailMode()) &amp;&amp; !$ctrl.useFallBack" md-svg-icon="primo-resource-type:newspaper_articles" role="presentation" class="md-primoExplore-theme">
                <svg id="newspaper_articles_cache31" width="100%" height="100%" viewBox="0 0 24 24" y="0" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                  <path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z"></path>
                  <rect height="2" width="6" x="9" y="7"></rect>
                  <rect height="2" width="2" x="16" y="7"></rect>
                  <rect height="2" width="6" x="9" y="10"></rect>
                  <rect height="2" width="2" x="16" y="10"></rect>
                </svg>
              </md-icon><!----><!----><!---->
              <prm-icon-after parent-ctrl="$ctrl"></prm-icon-after>
            </prm-icon>
              <span>Newspaper articles</span>
            </div>
          </button>
        `;
        row.insertAdjacentHTML('beforeend', html);      
      };
    }
  })

  // Add return to OneSearch link to Newspaper Search page
  app.component('prmNewspapersSearchBarAfter', {
    bindings: { parentCtrl: '<'},
    template: `
              <div style="display:flex">
                <div flex="0" flex-md="0" flex-lg="10" ng-class="{'flex-lgPlus-15': $ctrl.mediaQueries.lgPlus}" flex-xl="20" class="flex-xl-20 flex-md-0 flex-lg-10 flex-0"></div>
                <button class="back-button has-text md-button md-primoExplore-theme md-ink-ripple" type="button" aria-label="librarySearch" onclick="returnToLibrarySearch()">
                  <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="back-to-search"><!---->
                    <md-icon ng-if="($ctrl.iconDefinition &amp;&amp; !$ctrl.isCustom &amp;&amp; !$ctrl.isEmailMode()) &amp;&amp; !$ctrl.useFallBack" md-svg-icon="primo-ui:back-to-search" role="presentation" class="md-primoExplore-theme">
                      <svg id="back-to-search_cache391" width="100%" height="100%" viewBox="0 0 16 10" y="720" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                        <path d="M18.13,11.66a2.42,2.42,0,0,1-4,1.83l-0.1.1v0.29l-1.86,1.86-0.56-.56,1.86-1.86h0.29l0.1-.1a2.41,2.41,0,1,1,4.25-1.57m-0.74,0a1.67,1.67,0,1,0-1.67,1.67A1.66,1.66,0,0,0,17.39,11.66Z" transform="translate(-4.73 -7.94)"></path>
                        <path d="M10.37,16L6.89,12.5,10.37,9,9.3,7.94,4.73,12.5,9.3,17.06Z" transform="translate(-4.73 -7.94)"></path>
                      </svg>
                    </md-icon><!----><!----><!---->
                  <prm-icon-after parent-ctrl="$ctrl"></prm-icon-after></prm-icon>
                  <span translate="nui.newspapers.back">Back to library search</span>
                  <div class="md-ripple-container" style=""></div>
                </button>
              </div>
    `
  });

// Go to Newspaper Search function
function runNewspaperSearch() {
  let searchboxValue = document.getElementById('searchBar').value;
  let params = new URLSearchParams(document.location.search);
  let vid = params.get("vid");
  let search_scope = "all";
  let query = 'any,contains,' + searchboxValue;
  let url = location.origin + '/discovery/npsearch';
  let newspaperBase = `${url}?vid=${vid}`;
  let newspaperSearchUrl = `${url}?query=${query}&vid=${vid}&search_scope=${search_scope}`

  if (searchboxValue.length > 0) {
    window.location.replace(newspaperSearchUrl);
  } else {
    window.location.replace(newspaperBase);
  }
};

// Return to Library Search function
function returnToLibrarySearch() {
  let searchboxValue = document.getElementById('searchBar').value;
  let params = new URLSearchParams(document.location.search);
  let vid = params.get("vid");
  let search_scope = "UBSUNY";
  let query = 'any,contains,' + searchboxValue;
  let url = location.origin + '/discovery/search';
  let searchBase = `${url}?vid=${vid}`;
  let searchUrl = `${url}?query=${query}&vid=${vid}&tab=EverythingUBSUNY&search_scope=${search_scope}`

  if (searchboxValue.length > 0) {
    window.location.replace(searchUrl);
  } else {
    window.location.replace(searchBase);
  }
};
