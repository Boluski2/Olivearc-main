

const falomoterminalPano = {
    "default": {
        "firstScene": "FalomoTerminalEtrance",
        "author": "Olivearc",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
    },
    "scenes": {
        "FalomoTerminalEtrance": {
            "title": "Falomo Terminal Etrance",
            "hfov": 100,
            "type": "equirectangular",
            "panaroma":'/falomo_terminal/Boat_area_1.jpg',
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 20,
                    "yaw": 10,
                    "type": "scene",
                    "text": "Jetty Entrance",
                    "sceneId": "entrance"
                }
            ] 
        }
    }
};

export default falomoterminalPano;

