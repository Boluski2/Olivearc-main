
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
            "title": "Etegbin Entrance",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/etegbin_jetty/Front_entrance_to_waiting_area_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": -1,
                    "yaw": 35,
                    "type": "scene",
                    "text": "Etegbin Landing Area 2",
                    "sceneId": "Entrance1"
                },
            ]
        },
        "Entrance1":{
            "title": "Etegbin Entrance",
            "hfov": 10000,
            "pitch": 15,
           "type": "equirectangular",
            "panorama": '/etegbin_jetty/Stairs_to_waiting_area.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": -30,
                    "type": "scene",
                    "text": "Etegbin Entrance",
                    "sceneId": "Stair"
                },
            
            ]
        },
        "Stair":{
            "title": "Etegbin Entrance",
            "hfov": 10000,
            "pitch": 15,
           "type": "equirectangular",
            "panorama": '/etegbin_jetty/Front_entrance_to_waiting_area_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": -30,
                    "type": "scene",
                    "text": "Etegbin Entrance",
                    "sceneId": "waiting"
                },
               
            ]
        },
        "waiting":{
            "title": "Waiting Area",
            "hfov": 10000,
            "pitch": 15,
           "type": "equirectangular",
            "panorama": '/etegbin_jetty/Waiting_area.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Waiting Area",
                    "sceneId": "room"
                },
               
            ]
        },
        "room":{
            "title": "Room Area",
            "hfov": 10000,
            "pitch": 15,
           "type": "equirectangular",
            "panorama": '/etegbin_jetty/Room_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Room Area",
                    "sceneId": "room1"
                },
               
            ]
        },
        "room1":{
            "title": "Room Area",
            "hfov": 10000,
            "pitch": 15,
           "type": "equirectangular",
            "panorama": '/etegbin_jetty/Room_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Room Area",
                    "sceneId": "walk"
                },
               
            ]
        },
        "walk":{
            "title": "Walk Way",
            "hfov": 10000,
            "pitch": 15,
           "type": "equirectangular",
            "panorama": '/etegbin_jetty/Walk_through_to_jetty_area_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Walk way",
                    "sceneId": "walk1"
                },
               
            ]
        },
        "walk1":{
            "title": "Walk Way",
            "hfov": 10000,
            "pitch": 15,
           "type": "equirectangular",
            "panorama": '/etegbin_jetty/Walk_through_to_jetty_area_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Walk way",
                    "sceneId": "walk2"
                },
               
            ]
        },
        "walk2":{
            "title": "Walk Way",
            "hfov": 10000,
            "pitch": 15,
           "type": "equirectangular",
            "panorama": '/etegbin_jetty/Walkay_view_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Walk way",
                    "sceneId": "walk3"
                },
               
            ]
        },
        "walk3":{
            "title": "Walk Way",
            "hfov": 10000,
            "pitch": 15,
           "type": "equirectangular",
            "panorama": '/etegbin_jetty/Walkway_view_3.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Walk way",
                    "sceneId": "walk4"
                },
            ]
        },
        "walk4":{
            "title": "Walk Way",
            "hfov": 10000,
            "pitch": 15,
           "type": "equirectangular",
            "panorama": '/etegbin_jetty/Walkway_view_4.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Walk way",
                    "sceneId": "land"
                },
            ]
        },
        "land":{
            "title": "Land Area",
            "hfov": 10000,
            "pitch": 15,
           "type": "equirectangular",
            "panorama": '/etegbin_jetty/Landing_area_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Landing Area",
                    "sceneId": "land1"
                },
            ]
        },
        "land1":{
            "title": "Land Area",
            "hfov": 10000,
            "pitch": 15,
           "type": "equirectangular",
            "panorama": '/etegbin_jetty/Landinmg_area_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Landing Area",
                    "sceneId": "EtegbinEntrance"
                },
            ]
        },
    }
};

export default etegbinPano;
