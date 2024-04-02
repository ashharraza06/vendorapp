sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'compnav/test/integration/FirstJourney',
		'compnav/test/integration/pages/complainsList',
		'compnav/test/integration/pages/complainsObjectPage'
    ],
    function(JourneyRunner, opaJourney, complainsList, complainsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('compnav') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThecomplainsList: complainsList,
					onThecomplainsObjectPage: complainsObjectPage
                }
            },
            opaJourney.run
        );
    }
);