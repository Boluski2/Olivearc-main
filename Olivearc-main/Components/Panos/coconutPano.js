

const coconutPano = {
    "default": {
        "firstScene": "Waitingarea",
        "author": "Olivearc",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
    },
    "scenes": {
        "Waitingarea": {
            "title": "Jetty Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/coconut_landing/Walkthrough_to_jetty_area.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 10,
                    "yaw": 5,
                    "type": "scene",
                    "text": "Jetty Area",
                    "sceneId": "walkthrough"
                },
            ]
        },
        "walkthrough": {
            "title": "Waiting Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/coconut_landing/Walkway_around_jetty_area.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 30,
                    "type": "scene",
                    "text": "Waiting Area",
                    "sceneId": "walkthrough1"
                },
            ]
        },
        "walkthrough1": {
            "title": "Waiting Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/coconut_landing/Waiting_area.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Waiting Area",
                    "sceneId": "landing"
                },
            ]
        },
        "landing": {
            "title": "Landing Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/coconut_landing/Landing_area.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Landing Area",
                    "sceneId": "landing1"
                },
            ]
        },
        "landing1": {
            "title": "Landing Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/coconut_landing/Landing_area_view_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Landing Area",
                    "sceneId": "Waitingarea"
                },
            ]
        },
        }
};

export default coconutPano;

