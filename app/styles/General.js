import { StyleSheet } from "react-native";
import Colors from "./Colors"
import styled from 'styled-components';

const imgBackgroundStyle = StyleSheet.create({
    image: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE
    }
})
export const Divider = styled.TouchableOpacity`
height: 1px;
marginTop: 5px;
backgroundColor: black;
marginBottom: 5px;
border-radius: 5px;
`;

export const ButtonSembrar = styled.TouchableOpacity`
marginTop: 10px;
marginLeft: 20px;
marginRight: 30px;
backgroundColor: #BCF1CB;
height: 50px;
width: 320px;
border-radius: 100px;
justifyContent: center;
alignItems: center;
`
export const plantsScreen = StyleSheet.create(
  {
container: {
  },
});

export const infoScreen = StyleSheet.create({
  container: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#E6E6E6',
    marginTop: 10,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    height: 500,
  },
  containerCP:{
  },
  containerimg: {
  borderRadius: 50,
  width: 360,
  height: 300,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 20,
  borderColor: 'transparent',
  backgroundColor: '#E6E6E6',
  },
  containerImgs: {
    marginTop: 10,
  },
  img1: {
    width: 360,
    height: 300,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  img2: {
    width: 60,
    height: 60,
    top: 230,
    position: 'absolute',
    left: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  img3: {
    width: 60,
    height: 50,
    top: 45,
    left: 10,
    position: 'absolute',
  },
  img4: {
    width: 60,
    height: 50,
    top: 105,
    left: 10,
    position: 'absolute',
  },
  img5: {
    width: 60,
    height: 50,
    top: 165,
    left: 10,
    position: 'absolute',
  },
  img6: {
    width: 64,
    height: 50,
    top: 275,
    left: 10,
    position: 'absolute',
  },
  img7: {
    width: 64,
    height: 50,
    top: 335,
    left: 10,
    position: 'absolute',
  },
  img8: {
    width: 64,
    height: 50,
    top: 395,
    left: 10,
    position: 'absolute',
  },
  img9: {
    width: 64,
    height: 50,
    marginTop: 45,
    left: 10,
    position: 'absolute',
  },
  img10: {
    width: 64,
    height: 50,
    marginTop: 110,
    left: 10,
    position: 'absolute',
  },
  img11: {
    width: 64,
    height: 50,
    marginTop: 170,
    left: 10,
    position: 'absolute',
  },
  img12: {
    width: 64,
    height: 50,
    marginTop: 225,
    left: 10,
    position: 'absolute',
  },
  img13: {
    width: 64,
    height: 50,
    marginTop: 290,
    left: 10,
    position: 'absolute',
  },
  img14: {
    width: 64,
    height: 50,
    marginTop: 350,
    left: 10, 
    position: 'absolute',
  },
  img15: {
    width: 64,
    height: 50,
    marginTop: 410,
    left: 10,
    position: 'absolute',
  },
  img16: {
    width: 64,
    height: 50,
    marginTop: 475,
    left: 10,
    position: 'absolute',
  },
  img17: {
    width: 64,
    height: 50,
    marginTop: 535,
    left: 10,
    position: 'absolute',
  },
  img18: {
    width: 64,
    height: 50,
    marginTop: 595,
    left: 10,
    position: 'absolute',
  },
  img19: {
    width: 64,
    height: 50,
    marginTop: 655,
    left: 10,
    position: 'absolute',
  },
  img20: {
    width: 64,
    height: 50,
    marginTop: 720,
    left: 10,
    position: 'absolute',
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    marginLeft: 10,
    color: 'black',
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontFamily: 'Poppins-ExtraBold',
    marginLeft: 10,
    color: 'black',
  },
  buttontitle:{
    fontFamily: 'Poppins-ExtraBold',
    color: 'black',
    fontSize: 20,
  }
  ,
  subtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    marginLeft: 10,
  },
  name: {
    color: 'black',
    left: 70,
    fontSize: 15,
    fontFamily: 'Poppins-Light',
  }, 
  nameScience: {
    color: 'black',
    left: 70,
    marginEnd: 10,
    fontSize: 15,
    fontFamily: 'Poppins-Light',
  }, 
})

export const fertilizersList = StyleSheet.create({
  t1:{
    marginLeft: 10,
    color: '#848282',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 18,
  },
  t2:{
    marginLeft: 10,
    color: '#848282',
    fontSize: 28,
    fontWeight: '400',
    lineHeight: 29,
  },
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingTop: 10,
    borderRadius: 30,
    height: 250,
    width: 370,
  },
  title: {
    color: 'black',
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    marginTop: 30,
    marginLeft: 210,
    position: 'absolute',
  },
  description: {
    fontFamily: 'Poppins-Ligth',
    color: "#CCCCCC",
    fontSize: 20,
    marginLeft: 200,
    marginTop: 50,
  },
  img: {
    height: '105%',
    width: 150,
    borderRadius: 22,
    position: 'absolute',

  },
});

const screenCategories = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 130,
    width: '100%',
  },
  containerCircle: {
    marginTop: 60,
    width: 74,
    height: 28,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
  },
  titleCT:{
    fontFamily: 'DMSans-Bold',
    fontWeight: '50',
    fontSize: 36,
    marginTop: 140,
    marginLeft: 120,
    position: 'absolute',
    color: 'black',
  },
  items:{
    fontSize: 20,
    fontFamily: 'DMSans-Regular',
    color: 'black',
  },
  title: {
    fontSize: 24,
    fontFamily: 'DmSans-Regular',
    position: 'absolute',
    marginLeft: 0,
    marginRight: 110,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    marginLeft: 10,
  },
  imgs: {
    position: 'absolute',
  },
})
export const ButtonBK = styled.TouchableOpacity`
border-radius: 10px;
justifyContent: center;
width: 30%;
alignItems: center;
alignContent: center;
marginTop: 140px;
`;

export const ButtonCG = styled.TouchableOpacity`
border-radius: 50px;
backgroundColor: #000;
justifyContent: center;
alignItems: center;
marginTop: 130px;
`;
const screenPlants = StyleSheet.create({
  containerCircle: {
    borderRadius: 60/2,
    backgroundColor: '#ccc',
    height: 20,
    width: 27,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 5,
  },
  subtitle:{

  },
  image: {
    marginTop: 60,
    marginLeft: 30,
    marginRight: 30,
  },
  image2: {
    marginTop: 70,
    marginLeft: 120,
    marginRight: 100,
    height: 120,
    width: 172,
    position: 'absolute',
  },
  image3: {
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    height: 170,
    width: 153,
    position: 'absolute',
    borderRadius: 10,
  },
  container1:{
    marginTop: 0,
    marginLeft: 10,
    marginRight: 0,
    borderRadius: 10,
    height: 188,
    width: 183,
    backgroundColor: '#fff',
    //justifyContent: 'center',
    alignItems: 'center',
    //borderStartColor: '#000',
    //borderWidth: 0.5,

  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    marginLeft: 10,
    color: 'black',
  },
  subtitle: {
    color: '#000',
    marginTop: 167,
    fontSize: 16,
    fontFamily: 'DMSans-Bold',
  },
  img: {
    height: 60,
    width: 60,
    resizeMode: 'cover',
  }, 
  text : {
  fontFamily: 'DMSans-Bold',
  fontWeight: '30',
  color: 'black',
   marginTop: 10,
   marginLeft: 20,
  },
  containerFlatlist: {
    borderRadius: 20,
    backgroundColor: '#fff',

  }
})

const GeneralStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
    }
})

// Idioma Screen
export const screenLanguage = StyleSheet.create({
  container: {
    marginLeft: 15,
    padding: 10,
  },
  images: {
    flex:1,
  },
    headingStyle: {
    marginTop: 350,
    color: '#191919',
    marginLeft: 25,
    fontSize: 50,
    fontFamily: 'Poppins-ExtraBold',
  },
  textStyle: {
    marginLeft: 48,
    color: '#191919',
    fontFamily: 'Poppins-Medium',
    fontSize: 25,
  },
});

export const ButtonLanguage = styled.TouchableOpacity`
marginTop: 10px;
marginRight: 0px;
marginLeft: 25px;
backgroundColor: #D9D9D9;
height: 20px;
width: 20px;
border-radius: 30px;
position: absolute;
`

export const ButtonFB = styled.TouchableOpacity`
marginTop: 74px;
backgroundColor: #2D60E2;
height: 40px;
width: 368px;
border-radius: 30px;
justifyContent: center;
alignItems: center;
`

export const ButtonGL = styled.TouchableOpacity`
marginTop: 20px;
backgroundColor: #CCCCCC;
height: 40px;
width: 368px;
border-radius: 30px;
justifyContent: center;
alignItems: center;
`
// Login
export const screenLogin = StyleSheet.create({
  container: {
    marginLeft: 0,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image2: {
    marginTop: 125,
    marginLeft: 100,
    marginRight: 100,
    height: 122,
    width: 180,
    position: 'absolute',
  },
  images: {
    flex:1,
  },
  icon:{
    alignSelf: 'flex-start',
    marginLeft: 20,
    position: 'absolute', 
    justifyContent: 'flex-start',
  },
    headingStyle: 
  {
    marginTop: 350,
    color: '#191919',
    marginLeft: 25,
    fontSize: 30,
    fontFamily: 'Poppins-ExtraBold',
  },
  textStyle: {
    color: '#B6ACAC',
    fontFamily: 'DmSans-Regular',
    fontSize: 25,
  },
});

const styles = StyleSheet.create({
    container: {
      paddingTop: 60,
      paddingHorizontal: 16,
      backgroundColor: '#fff',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    title: {
      color: '#444',
      fontSize: 28,
      fontWeight: '600'
    },
    buttonContainer: {
      marginTop: 10
    },
    text: {
      fontSize: 18,
      color: '#000',
      paddingVertical: 4
    },
    selectedText: {
      fontSize: 18,
      fontWeight: '600',
      color: 'tomato',
      paddingVertical: 4
    },
  });
  
export { imgBackgroundStyle, GeneralStyles, styles, screenCategories, screenPlants}