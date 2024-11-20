

const falomoterminalPano = {
    "default": {
        "firstScene": "Drivethrough",
        "author": "Olivearc",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
    },
    "scenes": {
        "Drivethrough": {
            "title": "Drive Through",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/Drive_through_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Drive Through",
                    "sceneId": "Drivethrough1"
                },
            ]
        },
        "Drivethrough1": {
            "title": "Drive Through",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/Drive_through_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Drive Through",
                    "sceneId": "Drivethrough2"
                },
            ]
        },
        "Drivethrough2": {
            "title": "Drive Through",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/Drive_through_3.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Drive Through",
                    "sceneId": "Driveway"
                },
            ]
        },
        "Driveway": {
            "title": "Drive Way",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/Drive_way_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Drive Way",
                    "sceneId": "Driveway1"
                },
            ]
        },
        "Driveway1": {
            "title": "Drive Way",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/Drive_way_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Drive Way",
                    "sceneId": "Driveway2"
                },
            ]
        },
        "Driveway1": {
            "title": "Drive Way",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/Drive_way_3.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Drive Way",
                    "sceneId": "Entrance"
                },
            ]
        },
        "Entrance": {
            "title": "Entrance Way",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/Entrance.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Entrance Way",
                    "sceneId": "Entrance1"
                },
            ]
        },
        "Entrance1": {
            "title": "Entrance Way",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/General_walkway.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Entrance Way",
                    "sceneId": "Entrance2"
                },
            ]
        },
        "Entrance2": {
            "title": "Entrance Way",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/Entry_to_arrivals_waiting_area.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Entrance Way",
                    "sceneId": "snack"
                },
            ]
        },
        "snack": {
            "title": "Snacks Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/Snacks_area.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Snacks Area",
                    "sceneId": "ticketing"
                },
            ]
        },
        "ticketing": {
            "title": "Ticketing Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/Ticketing_area.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Ticking Area",
                    "sceneId": "Waiting"
                },
            ]
        },
        "Waiting": {
            "title": "Waiting Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/Path_to_waiting_area.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Waiting Area",
                    "sceneId": "Waiting1"
                },
            ]
        },
        "Waiting1": {
            "title": "Waiting Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/Arrivals_waiting_area.jpg', // Adjust the path as needed
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
            "title": "Waiting to Landing Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/Walkway_5.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Waiting to Landing Area",
                    "sceneId": "landing1"
                },
            ]
        },
        "landing1": {
            "title": "Waiting to Landing Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/Walkway_4.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Waiting to Landing Area",
                    "sceneId": "landing3"
                },
            ]
        },
        "landing3": {
            "title": "Waiting to Laning Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/Walkway_3.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Waiting to Laning Area",
                    "sceneId": "landing4"
                },
            ]
        },
        "landing4": {
            "title": "Waiting to Landing Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/Walkway_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Waiting to Landing Area",
                    "sceneId": "landing5"
                },
            ]
        },
        "landing5": {
            "title": "Waiting to Landing Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/Walkway_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Waiting to Landing Area",
                    "sceneId": "landing6"
                },
            ]
        },
        "landing6": {
            "title": "Park Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/jetski_park_area.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Park Area",
                    "sceneId": "Boat"
                },
            ]
        },
        "Boat": {
            "title": "Park Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/Boat_parking_area_view_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Park Area",
                    "sceneId": "Boat1"
                },
            ]
        },
        "Boat1": {
            "title": "Park Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/Boat_parking_area_view_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Park Area",
                    "sceneId": "Boat2"
                },
            ]
        },
        "Boat2": {
            "title": "Boat Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/Boat_area_6.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Boat Area",
                    "sceneId": "Boat3"
                },
            ]
        },
        "Boat3": {
            "title": "Boat Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/Boat_area_5.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Boat Area",
                    "sceneId": "Boat4"
                },
            ]
        },
        "Boat4": {
            "title": "Boat Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/Boat_area_4.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Boat Area",
                    "sceneId": "Boat5"
                },
            ]
        },
        "Boat5": {
            "title": "Boat Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/Boat_area_3.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Boat Area",
                    "sceneId": "Boat6"
                },
            ]
        },
        "Boat6": {
            "title": "Boat Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/Boat_area_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Boat Area",
                    "sceneId": "Boat7"
                },
            ]
        },
        "Boat7": {
            "title": "Boat Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/falomo/Boat_area_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Boat Area",
                    "sceneId": "Drivethrough"
                },
            ]
        },
    }
};

export default falomoterminalPano;

