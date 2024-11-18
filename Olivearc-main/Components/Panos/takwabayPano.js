

const takwabayPano = {
    "default": {
        "firstScene": "TakwayBayEntrance",
        "author": "Olivearc",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
    },
    "scenes": {
        "TakwayBayEntrance": {
            "title": "Takway Bay Entrance",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/takwa_bay/Landing_area_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Landing Area 1",
                    "sceneId": "TakwayBayEntrance"
                },
                {
                    "pitch": 1,
                    "yaw": 30,
                    "type": "scene",
                    "text": "Landing Area 2",
                    "sceneId": "LandingArea2"
                }
            ]
        },
        "LandingArea2": {
            "title": "Takway Bay Entrance 2",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/takwa_bay/Landing_area_2.jpg',
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": -30,
                    "type": "scene",
                    "text": "Landing Area 1",
                    "sceneId": "TakwayBayEntrance",
                },
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Landing Area 2",
                    "sceneId": "LandingArea2",
                },
                {
                    "pitch": 1,
                    "yaw": 30,
                    "type": "scene",
                    "text": "Landing Area 2",
                    "sceneId": "Walkwayview",
                }
            ]
        },
        "Walkwayview": {
            "title": "Walk way one",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/takwa_bay/Walkway_view_2.jpg',
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Walk way view 1",
                    "sceneId": "TakwayBayEntrance",
                },
                {
                    "pitch": 1,
                    "yaw": -5,
                    "type": "scene",
                    "text": "Landing Area 2",
                    "sceneId": "LandingArea2",
                },
                {
                    "pitch": 1,
                    "yaw": 15,
                    "type": "scene",
                    "text": "Walkway View 2",
                    "sceneId": "Walkwayview2",
                }
            ]
        },
        "Walkwayview2": {
            "title": "Walk way one",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/takwa_bay/Walkway_view_1.jpg',
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Walkway View 2",
                    "sceneId": "Walkwayview2",
                },
                {
                    "pitch": 3,
                    "yaw": 5,
                    "type": "scene",
                    "text": "Walkway View one",
                    "sceneId": "Walkwayview",
                },
                {
                    "pitch": -1,
                    "yaw": 10,
                    "type": "scene",
                    "text": "Walk way 3",
                    "sceneId": "Entrance",
                }
            ]
        },
        "Entrance":  { "title": "Walk way one",
        "hfov": 100,
        "type": "equirectangular",
        "panorama": '/takwa_bay/Entrance_and_exit.jpg',
        "showControls": false,
        "hotSpots": [
            {
                "pitch": 1,
                "yaw": 1,
                "type": "scene",
                "text": "Walkway View 2",
                "sceneId": "Walkwayview2",
            },
            {
                "pitch": 1,
                "yaw": 1,
                "type": "scene",
                "text": "Walkway through 1",
                "sceneId": "Walkwaythrough1",
            }
            ]
        },
        "Walkwaythrough1":  { "title": "Walk throught",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/takwa_bay/Walkthrough_1_around_building.jpg',
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Walkway through 1",
                    "sceneId": "Walkwaythrough1",
                },
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Walkway through 1",
                    "sceneId": "Walkwaythrough2",
                },
            ]
        },
        "Walkwaythrough2":  { "title": "Walk throught",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/takwa_bay/Walkthrough_2_around_building.jpg',
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Walkway through 1",
                    "sceneId": "Walkwaythrough1",
                },
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Walkway through 1",
                    "sceneId": "Walkwaythrough2",
                },
            ]
        },
        "Walkwaythrough3":  { "title": "Walk throught",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/takwa_bay/Walkthrough_3_around_building.jpg',
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Walkway through 1",
                    "sceneId": "Walkwaythrough2",
                },
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Walkway through 1",
                    "sceneId": "Walkwaythrough3",
                },
            ]
        },
        "Walkwaythrough4":  { "title": "Walk throught",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/takwa_bay/Walkthrough_4_around_bulding.jpg',
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Walkway through 1",
                    "sceneId": "Walkwaythrough3",
                },
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Walkway through 1",
                    "sceneId": "TakwayBayEntrance",
                },
            ]
        }
    }
}

export default takwabayPano;