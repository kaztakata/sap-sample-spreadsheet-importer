sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'project1/test/integration/FirstJourney',
		'project1/test/integration/pages/TemplateRequestsList',
		'project1/test/integration/pages/TemplateRequestsObjectPage'
    ],
    function(JourneyRunner, opaJourney, TemplateRequestsList, TemplateRequestsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTemplateRequestsList: TemplateRequestsList,
					onTheTemplateRequestsObjectPage: TemplateRequestsObjectPage
                }
            },
            opaJourney.run
        );
    }
);