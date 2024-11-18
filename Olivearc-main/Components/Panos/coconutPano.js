

const coconutPano = {
    "default": {
        "firstScene": "IbasaEntrance",
        "author": "Olivearc",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
    },
    "scenes": {
        "IbasaEntrance": {
            "title": "Ibasa Entrance",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/oworo/Entry_gate.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": -15,
                    "yaw": 30,
                    "type": "scene",
                    "text": "Waiting Room Entrance",
                    "sceneId": "waitingEntrance"
                },
            ]
        }
        }
};

export default coconutPano;

