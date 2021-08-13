import  {  OptionVehicle,changeLocation } from "../../enum";



const initialState = {
    origin: ' 16.039173,108.210912',
    destination: '16.044597,108.217263',
    vehicle: 'car',
    key: '33a10ae857f9f0320e808d7a001c605f',
};

const MapView = (state = initialState, action) => {
    switch (action.type) {
        case OptionVehicle.changeVehicle:
            return {
                ...state,
                vehicle: (action.payload)
            };
        case changeLocation.changeLocation:
            return {
                ...state,
                origin: (action.payload.origin),
                destination: (action.payload.destination),
                vehicle: (action.payload.vehicle),
            };

        default:
            return state;
    }

};


export default MapView