import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';            //以上導入

export default function App() {

  const [validCode, setVaildCode] = useState('')
  const [State, setState] = useState('')
  const Password = '1000'

  /*                                                                         //if.else即時判斷寫法
  const rightCode = () => {                                                  //判斷結果呈現文字處需加{rightCode()}
    if (validCode === '1000')                                                //此處為註解並無呈現
    { return < Text style={styles.text2}> State : OK</Text > }                
    else 
    { return < Text style={styles.text2}> State : Retry</Text > }
}
  */
  return (
    <View style={styles.container}>
      <Text style={styles.maintext}> $$$ Congratulations you won a bonus $$$ </Text>
      <TextInput
        style={{
          height: 50, width: 300, borerRadius: 0,                             //輸入區格式
          borderColor: 'black', borderWidth: 1, backgroundColor: 'white',
          color: 'black', fontSize: 22, textAlign: 'center'
        }}
        onChangeText={(text) => setVaildCode(text)}
        value={validCode}
        maxLength={4}
        placeholder='Text here (four digits)'                                 //框內背景字
        keyboardType='numeric'                                                //鍵盤樣式
        secureTextEntry={false}                                               //true隱藏打出的字
        autoFocus={true}                                                      //true自動跳出鍵盤
      />
      <Text style={styles.text1}>YOUR BONUS : ${validCode}</Text>
      <Text style={styles.text2}>State: {State}</Text>

      <TouchableOpacity
        style={{
          backgroundColor: '#00aeef', borderRadius: 20, width: 300, height: 40,
          justifyContent: 'center', margin: 10                                  //按鈕內的東西置中,物件增加距離
        }}
        onPress={() => {                                                        //按鈕判斷密碼
          if (validCode === Password) { return setState('OK') }
          else { setState('none') }
          console.log('clicked')
        }
        }>
        <Text style={styles.text3}>Click to Win</Text>

      </TouchableOpacity>

      < StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',                                               //若有似無的淺藍
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    textAlign: 'center',                                                       //文字格式們
    fontSize: 20,
    color: 'black'
  },
  text1: {
    fontSize: 10,
    color: 'gray'
  },
  text2: {
    fontSize: 20,
    color: 'red'
  },
  text3: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  }
});
