import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import StartPage from './StartPage'
import InputName from './InputName'
import InputDate from './InputDate'
import InputGender from './InputGender'
import InputPhone from './InputPhone'
import InputPassword from './InputPassword'
import Complete from './Complete'
import EmailAddress from './EmailAddress'

const Stack = createStackNavigator()

const Register = (props) => {
    return (
        <>            
            <Stack.Navigator initialRouteName="StartPage">
                <Stack.Screen options={{headerTitle:"Register"}} name="StartPage" component={StartPage}/>
                <Stack.Screen options={{headerTitle:"Name"}} name="InputName" component={InputName}/>
                <Stack.Screen options={{headerTitle:"Date"}} name="InputDate" component={InputDate}/>
                <Stack.Screen options={{headerTitle:"Gender"}} name="InputGender" component={InputGender}/>
                <Stack.Screen options={{headerTitle:"Phone"}} name="InputPhone" component={InputPhone}/>
                <Stack.Screen options={{headerTitle:"Password"}} name="InputPassword" component={InputPassword}/>
                <Stack.Screen options={{headerTitle:"Email Adress"}} name="EmailAddress" component={EmailAddress}/>
                <Stack.Screen options={{headerTitle:"Complete"}} name="Complete" component={Complete}/>

            </Stack.Navigator>            
        </>
    )
}
export default Register

