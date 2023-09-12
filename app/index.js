import {useState}                             from 'react'
import {View, Text, SafeAreaView, ScrollView} from "react-native"
import {Stack, useRouter}                     from "expo-router"
import {COLORS, icons, images, SIZES}                      from "../constants"
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from "../components"

const Home = () => {
  const router = useRouter()

  return (
    <SafeAreaView styles={{flex: 1, background: COLORS.lightWhite}}>
      <Stack.Screen
        options={{
          headerStyle: {background: COLORS.lightWhite},
          headerShadowVisible: false,
          headerLeft: () => (<ScreenHeaderBtn iconUrl={icons.menu} dimension={`60%`}/>),
          headerRight: () => (<ScreenHeaderBtn iconUrl={images.profile} dimension={`100%`}/>),
          headerTitle: ''
        }}
      />
      <ScrollView showVerticalScrollIndicator={false}>
        <View style={{flex: 1, padding: SIZES.medium}}>
          <Welcome

          />
          <Popularjobs/>
          <Nearbyjobs/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
