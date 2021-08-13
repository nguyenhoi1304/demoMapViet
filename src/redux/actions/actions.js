import { OptionVehicle, changeLocation } from "../../enum"


export const changeVehicle = (vehicle) => {
    return {
        type: OptionVehicle.changeVehicle,
        payload: vehicle,
    }
}

export const changeLoca = (origin,destination,vehicle) => {
    return {
        type: changeLocation.changeLocation,
        payload: {origin,destination,vehicle},
    }
}

