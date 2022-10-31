import React from "react";


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
       <Stack.Navigator>
            <Stack.Screen
                name=""
                component={""}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>

    );
}