import { combineReducers } from 'redux'
import MapView from './MapView'

 const rootReducer = combineReducers({
    changeMap: MapView, 
})

export default rootReducer