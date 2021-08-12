import  { ActionGuideEnum, ActionTypeEnum, TestEnum } from "../../enum";



const initialState = {
    address: '',
    guide:'',
}
const Reducers = (state = initialState, action) => {
    switch (action.type) {
        case ActionGuideEnum.guide: {
            return {
                ...state,
                guide: action.payload
            }
        }   
        case ActionTypeEnum.changeAddress: {
            return {
                ...state,
                address: action.payload
            }
        }

        default:
            return state;
    }

};










export default Reducers