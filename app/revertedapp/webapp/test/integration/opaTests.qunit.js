sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'revertedapp/test/integration/FirstJourney',
		'revertedapp/test/integration/pages/complainsList',
		'revertedapp/test/integration/pages/complainsObjectPage'
    ],
    function(JourneyRunner, opaJourney, complainsList, complainsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('revertedapp') + '/index.html'
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