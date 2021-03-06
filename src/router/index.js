import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Akun, About, Login, Loading, Jemaah, Formulir, TentangHaji, DaftarHaji, KetentuanHaji, tentangUmroh, Profile, DetailJemaah, Pembayaran, About1, FormPembayaran, DokumenPersyaratan, FormDokumen, Register } from '../pages'
import { BottomTabNavigator } from '../componenets';
import { WarnaDark } from '../utils/constants';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomTabNavigator {...props}/>}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="About" component={About} options={{ headerShown: false }} />
            <Tab.Screen name="Akun" component={Akun} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

const JemaahApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomTabNavigator {...props}/>}>
            {/* <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Pembayaran" component={About} options={{ headerShown: false }} />
            <Tab.Screen name="Akun" component={Akun} options={{ headerShown: false }} /> */}
            <Tab.Screen name="Home" component={Jemaah} options={{ headerShown: false }} />
            <Tab.Screen name="Pembayaran" component={Pembayaran} options={{ headerShown: false }} />
            <Tab.Screen name="DokumenPersyaratan" component={DokumenPersyaratan} options={{ headerShown: false }} />
            <Tab.Screen name="Akun" component={Akun} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

const Router = () => {

    

    return (
        <Stack.Navigator>
            {/* {User.status == 'login' && */}
                <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false}} />
                <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
                <Stack.Screen name="JemaahApp" component={JemaahApp} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                <Stack.Screen name="Formulir" component={Formulir} options={{title: 'Pendaftaran', headerTitleAlign: 'center',}}/>
                <Stack.Screen name="Jemaah" component={Jemaah} options={{ headerShown: false}}/>
                <Stack.Screen name="TentangHaji" component={TentangHaji} options={{title: 'Tentang Haji', headerTitleAlign: 'center'}}/>
                <Stack.Screen name="DaftarHaji" component={DaftarHaji} options={{title: 'Cara Daftar Haji', headerTitleAlign: 'center'}}/>
                <Stack.Screen name="KetentuanHaji" component={KetentuanHaji} options={{title: 'Syarat & Ketentuan Haji', headerTitleAlign: 'center'}}/>
                <Stack.Screen name="tentangUmroh" component={tentangUmroh} options={{title: 'Tentang Umroh', headerTitleAlign: 'center'}}/>
                <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                <Stack.Screen name="DetailJemaah" component={DetailJemaah} options={{ headerShown: false}}/>
                {/* <Stack.Screen name="Pembayaran" component={Pembayaran} options={{ headerShown: false}}/> */}
                <Stack.Screen name="About1" component={About1} options={{ headerShown: false}}/>
                {/* <Stack.Screen name="DokumenPersyaratan" component={DokumenPersyaratan} options={{ headerShown: false}}/> */}
                <Stack.Screen name="FormPembayaran" component={FormPembayaran} options={{title: 'Form Konfirmasi Pembayaran', headerTitleAlign: 'center'}}/>
                <Stack.Screen name="FormDokumen" component={FormDokumen} options={{title: 'Form Konfirmasi Pembayaran', headerTitleAlign: 'center'}}/>

            {/* }
            {User.status != 'login' && */}
            {/* } */}

        </Stack.Navigator>
    );
};

export default Router

const styles = StyleSheet.create({})
