
const oworoPano = {
    "default": {
        "firstScene": "oworoEntrance",
        "author": "Olivearc",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
    },
    "scenes": {
        "oworoEntrance": {
            "title": "Oworoshoki Entrance",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/oworo/Main_entrance.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": -10,
                    "type": "scene",
                    "text": "Car Park",
                    "sceneId": "carpark1"
                },
                {
                    "pitch": 2,
                    "yaw": 3,
                    "type": "scene",
                    "text": "Gate walk way",
                    "sceneId": "gatewalkway"
                },
            ]
        },
        "carpark1": {
            "title": "Oworoshoki Entrance",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/oworo/Car_park_area_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 5,
                    "yaw": 25,
                    "type": "scene",
                    "text": "Car park 2",
                    "sceneId": "carpark2"
                },
                // {
                //     "pitch": 5,
                //     "yaw": 20,
                //     "type": "scene",
                //     "text": "Oworoshoki Entrance",
                //     "sceneId": "oworoEntrance"
                // },
                {
                    "pitch": 5,
                    "yaw": 35,
                    "type": "scene",
                    "text": "Waiting Area Corridor",
                    "sceneId": "WaitingAreaCorridor"
                }
            ]
        },
        "carpark2": {
            "title": "Oworoshoki Entrance",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/oworo/Car_park_area_2', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 5,
                    "type": "scene",
                    "text": "Car park 3",
                    "sceneId": "carpark3"
                },
                // {
                //     "pitch": 5,
                //     "yaw": 8,
                //     "type": "scene",
                //     "text": "Garden Area 1",
                //     "sceneId": "gardenArea1"
                // },
            ]
        },
        "carpark3": {
            "title": "Oworoshoki Entrance",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/oworo/Car_park_area_3', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 5,
                    "type": "scene",
                    "text": "",
                    "sceneId": "oworoEntrance"
                },
                // {
                //     "pitch": 5,
                //     "yaw": 10,
                //     "type": "scene",
                //     "text": "Garden Area 1",
                //     "sceneId": "gardenArea1"
                // },
            ]
        },
        "carpark3": {
            "title": "Oworoshoki Entrance",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/oworo/Car_park_area_3', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 5,
                    "type": "scene",
                    "text": "Oworoshoki Entrance",
                    "sceneId": "oworoEntrance"
                },
                // {
                //     "pitch": 5,
                //     "yaw": 10,
                //     "type": "scene",
                //     "text": "Garden Area 1",
                //     "sceneId": "gardenArea1"
                // },
            ]
        },
        }
}

export default oworoPano;