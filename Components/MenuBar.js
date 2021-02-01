import React from 'react'
import {FontAwesome5} from '@expo/vector-icons'
function MenuBar({onPress}){
    return <FontAwesome5 name = "bars" size={24} color="#161924" style={{alignSelf:"flex-end"}} onPress={onPress}/>
}
export default MenuBar;
