const navigator = new OpenWanderer.Navigator({
    api: { 
        byId: 'panorama/{id}', 
        panoImg: 'panorama/{id}.jpg',
        sequenceUrl: 'sequence/{id}'
    },
});

navigator.loadPanorama(1);
