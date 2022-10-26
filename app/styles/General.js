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
marginTop: 0px;
marginLeft: 20px;
marginRight: 30px;
backgroundColor: rgba(84,78,78,1);
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
    top: 225,
    left: 10,
    position: 'absolute',
  },
  img7: {
    width: 64,
    height: 50,
    top: 340,
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
    top: 450,
    left: 10,
    position: 'absolute',
  },
  img10: {
    width: 64,
    height: 50,
    top: 560,
    left: 10,
    position: 'absolute',
  },
  img11: {
    width: 64,
    height: 50,
    top: 620,
    left: 10,
    position: 'absolute',
  },
  img12: {
    width: 64,
    height: 50,
    top: 680,
    left: 10,
    position: 'absolute',
  },
  img13: {
    width: 64,
    height: 50,
    top: 740,
    left: 10,
    position: 'absolute',
  },
  img14: {
    width: 64,
    height: 50,
    top: 805,
    left: 10,
    position: 'absolute',
  },
  img15: {
    width: 64,
    height: 50,
    top: 870,
    left: 10,
    position: 'absolute',
  },
  img16: {
    width: 64,
    height: 50,
    top: 930,
    left: 10,
    position: 'absolute',
  },
  img17: {
    width: 64,
    height: 50,
    top: 985,
    left: 10,
    position: 'absolute',
  },
  img18: {
    width: 64,
    height: 50,
    top: 1050,
    left: 10,
    position: 'absolute',
  },
  img19: {
    width: 64,
    height: 50,
    top: 1110,
    left: 10,
    position: 'absolute',
  },
  img20: {
    width: 64,
    height: 50,
    top: 1175,
    left: 10,
    position: 'absolute',
  },
  img21: { // Interfiriendo refactorizar los numeros de cada imagen
    width: 64,
    height: 50,
    top: 4000,
    left: 10,
    position: 'absolute',
  },
  img22: {
    width: 64,
    height: 50,
    top: 1235,
    left: 10,
    position: 'absolute',
  },
  img23: {
    width: 64,
    height: 50,
    top: 1300,
    left: 10,
    position: 'absolute',
  },
  img24: {
    width: 64,
    height: 50,
    top: 1350,
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
    color: 'white',
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
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    paddingTop: 10,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 22,
    height: 'auto',
    width: 370,
  },
  title: {
    top: -50,
  color: 'black',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    marginLeft: 20,
  },
  description: {
    fontFamily: 'Poppins-Medium',
    color: "#121212",
    fontSize: 10,
    marginTop: 30,
    flex: 1,
    marginLeft: -115
  },
  img: {
    height: '100%',
    width: 90,
    left: 10,
  },
});

const screenCategories = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#4D5054',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    marginLeft: 10,
  },
  img: {
    height: 50,
    width: 50,
    resizeMode: 'cover',
    flexDirection: 'row',

  },
})

export const AvatarRedondo = styled.TouchableOpacity`
border-radius: 50px;
backgroundColor: #000;
justifyContent: center;
alignItems: center;
alignContent: center;
marginLeft: 200px;
`;
const screenPlants = StyleSheet.create({
  avatar: {
    height: 75,
    width: 80,
    position: 'absolute',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 5,
  },
  name:{
    paddingTop: 40,
    paddingRight: 145,
    fontFamily: 'Poppins-Light',
    fontSize: 25,
  },
  nameBold: {
    paddingRight: 120,
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
  },
  containerInfo: {
    alignContent: 'center',
    alignItems: 'center',
    height: 233,
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#9DD2AF',
  },
  containerWeather: {
  marginTop: 10,
  height: 211,
  width: 300,
  borderRadius: 20,
  backgroundColor: '#fff',
  color: 'black', 
},
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    marginLeft: 10,
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    marginLeft: 10,
  },
  img: {
    height: 60,
    width: 60,
    resizeMode: 'cover',
  }, 
  text : {
    color: 'black',
   marginTop: 50,
  },
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

const styles = StyleSheet.create({
    container: {
      paddingTop: 60,
      paddingHorizontal: 16
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