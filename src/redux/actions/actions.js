import { ActionTypeEnum } from "../../enum"

export class Actions {
    
    static setAddress = (address) => {
        return {
            type: ActionTypeEnum.changeAddress,
            payload: address,
        }
    }

}
