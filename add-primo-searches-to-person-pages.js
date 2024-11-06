// Add Primo Author Search to Person page
  app.component('prmFeaturedResultsAfter', {
    bindings: { parentCtrl: '<'},
    controller: function ($timeout) {
      this.$onInit = function() {
        $timeout(function() {
          const ogTitle = document.getElementById("ogTitle");
          const personHeaderElement = document.querySelector(".person-header h2 span");
          const allTitlesByLink = document.querySelector('.person-gallery a[aria-label="Link To Show All Titles By"]');
          let searchString;

          if(ogTitle.content.length > 0) {
            searchString = ogTitle.content;
          } else {
            searchString = removeAfterFirstNumber(personHeaderElement.innerHTML);
            searchString = trimEndSpacesAndCommas(searchString);
          }

          const allTitlesAboutLink = document.querySelector('.person-gallery a[aria-label="Link To Show All Titles Written About"]');
          const authorOneSearchHtml =
            `<div id="authorOneSearch" style="marign-right:10px"><a class="md-primoExplore-theme" href="https://suny-buf-psb.primo.exlibrisgroup.com/discovery/search?query=creator,contains,${searchString},&tab=EverythingUBSUNY&search_scope=UBSUNY&vid=01SUNY_BUF:everything&mode=advanced&offset=0">Search All Titles in OneSearch</a></div>`;
          const subjectOneSearchHtml =
            `<div id="subjectOneSearch" style="marign-right:10px"><a class="md-primoExplore-theme" href="https://suny-buf-psb.primo.exlibrisgroup.com/discovery/search?query=sub,contains,${searchString},&tab=EverythingUBSUNY&search_scope=UBSUNY&vid=01SUNY_BUF:everything&mode=advanced&offset=0">Search All Titles in OneSearch</a></div>`;
          
          if (allTitlesByLink != null && allTitlesByLink != undefined) {
            if (document.querySelector('#authorOneSearch') == undefined) {
              allTitlesByLink.insertAdjacentHTML('beforebegin', authorOneSearchHtml);
            }
          }        

          if (allTitlesAboutLink != null && allTitlesAboutLink != undefined) {
            if (document.querySelector('#subjectOneSearch') == undefined) {
              allTitlesAboutLink.insertAdjacentHTML('beforebegin', subjectOneSearchHtml);
            }
          }

          function removeAfterFirstNumber(str) {
            // Use a regular expression to find the first number and its position
            const match = str.match(/\d/);
            
            // If a number is found, slice the string up to the position of the number
            if (match) {
                return str.slice(0, match.index);
            }
            
            // If no number is found, return the original string
            return str;
          }

          function trimEndSpacesAndCommas(str) {
            return str.replace(/[\s,]+$/, '');
          }

        }, 1000);
      };
    }
  });
