
// badorePano.js

const etegbinPano = {
    "default": {
        "firstScene": "EtegbinEntrance",
        "author": "Olivearc",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
    },
    "scenes": {
        "EtegbinEntrance": {
            "title": "Etegbin Landing Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/etegbin_jetty/Landing_area_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 10,
                    "type": "scene",
                    "text": "Etegbin Landing Area 1",
                    "sceneId": "entrance"
                },
                {
                    "pitch": -1,
                    "yaw": 35,
                    "type": "scene",
                    "text": "Etegbin Landing Area 2",
                    "sceneId": "LandingArea2"
                },
            ]
        },
        "LandingArea2":{
            "title": "Landing Area",
            "hfov": 10000,
            "pitch": 15,
           "type": "equirectangular",
            "panorama": '/etegbin_jetty/Landinmg_area_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": -30,
                    "type": "scene",
                    "text": "Etegbin Landing Area 1",
                    "sceneId": "EtegbinEntrance"
                },
                {
                    "pitch": -10,
                    "yaw": -1,
                    "type": "scene",
                    "text": "Etegbin Landing Area 2",
                    "sceneId": "LandingArea2"
                },
                {
                    "pitch": -10,
                    "yaw": 35,
                    "type": "scene",
                    "text": "Walkway1",
                    "sceneId": "IbasaEntrance"
                }
            ]
        }
    }
};

export default etegbinPano;
