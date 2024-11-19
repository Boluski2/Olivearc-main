
const sagbokojiPano = {
    "default": {
        "firstScene": "BoatArea",
        "author": "Olivearc",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
    },
    "scenes": {
        "BoatArea": {
            "title": "Boat Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/sagbokoji/Boat_area_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 6,
                    "yaw": 12,
                    "type": "scene",
                    "text": "Boat Area View 1",
                    "sceneId": "BoatAreaView1"
                },
            ]
        },
        "BoatAreaView1": {
            "title": "Boat Area View",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/sagbokoji/Boat_area_1_view_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 5,
                    "yaw": 10,
                    "type": "scene",
                    "text": "Boat Area View 2",
                    "sceneId": "BoatAreaView2"
                },
            ]
        },
        "BoatAreaView2": {
            "title": "Boat Area View",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/sagbokoji/Boat_area_1_view_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 5,
                    "yaw": 10,
                    "type": "scene",
                    "text": "Landing Area 1",
                    "sceneId": "LandingArea1"
                },
            ]
        },
        "LandingArea1": {
            "title": "Boat Area View",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/sagbokoji/Landing_area_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 5,
                    "yaw": 10,
                    "type": "scene",
                    "text": "Landing Area 2",
                    "sceneId": "LandingArea2"
                },
            ]
        },
        "LandingArea2": {
            "title": "Boat Area View",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/sagbokoji/Landing_area_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [

                {
                    "pitch": 5,
                    "yaw": 10,
                    "type": "scene",
                    "text": "Walk way through",
                    "sceneId": "Walkwaythrough"
                },
            ]
        },
        "Walkwaythrough": {
            "title": "Boat Area View",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/sagbokoji/Walkthrough_to_walkway.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 5,
                    "yaw": 10,
                    "type": "scene",
                    "text": "Walk way1",
                    "sceneId": "Walkway1"
                },
            ]
        },
        "Walkway1": {
            "title": "Boat Area View",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/sagbokoji/Walkway_view_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 5,
                    "yaw": 10,
                    "type": "scene",
                    "text": "Walk way2",
                    "sceneId": "Walkway2"
                },
            ]
        },
        "Walkway2": {
            "title": "Boat Area View",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/sagbokoji/Walkway_view_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 5,
                    "yaw": 10,
                    "type": "scene",
                    "text": "Walk way3",
                    "sceneId": "Walkway3"
                },
            ]
        },
        "Walkway3": {
            "title": "Boat Area View",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/sagbokoji/Walkway_view_3.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [

                {
                    "pitch": 5,
                    "yaw": 10,
                    "type": "scene",
                    "text": "Boat Area",
                    "sceneId": "BoatArea"
                },
            ]
        },
        }
}

export default sagbokojiPano;