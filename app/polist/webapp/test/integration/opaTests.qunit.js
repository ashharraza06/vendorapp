sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'polist/test/integration/FirstJourney',
		'polist/test/integration/pages/poheaderList',
		'polist/test/integration/pages/poheaderObjectPage'
    ],
    function(JourneyRunner, opaJourney, poheaderList, poheaderObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('polist') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThepoheaderList: poheaderList,
					onThepoheaderObjectPage: poheaderObjectPage
                }
            },
            opaJourney.run
        );
    }
);