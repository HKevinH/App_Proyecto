import { infoScreen, styles, ButtonSembrar, Divider } from '@styles/General';
import { View, Image, TouchableOpacity, Text, StyleSheet, SafeAreaView, Button } from 'react-native';
import StringsOfLanguages from '@components/StringsOfLanguages';
import { ActivityIndicator } from 'react-native-paper';
import usePlants from '@hooks/usePlants';
import { ScrollView } from 'react-native-gesture-handler';
import React, {useLayoutEffect} from 'react';

export default function InfoScreen({ route }) {
  const { plantsId } = route.params;
  const { data: plants, isLoading, isSuccess } = usePlants({ plantsId});
  console.log(plants);
  if (isLoading) {
    return (
      <View>
        <ActivityIndicator />
        <Text>{StringsOfLanguages.isLoading}</Text>
      </View>
    );
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={infoScreen.containerimg}>
          <Image source={{ uri: plants.thumbnail_url }}
            style={infoScreen.img1} />
          <Image source={{ uri: plants.icon }}
            style={infoScreen.img2} resizeMode='contain' />
        </View>
        <View style={{
          padding: 10,
        }}>
          <ButtonSembrar>
            <Text style={infoScreen.buttontitle}>{StringsOfLanguages.buttonSend}</Text>
          </ButtonSembrar>
          <Text style={infoScreen.description}>{plants.description}</Text>
          <View style={infoScreen.containerImgs}>
          <Text style={infoScreen.title}>{StringsOfLanguages.information}</Text>
          <Image source={{uri: plants.icon}}
            style={infoScreen.img3} resizeMode='contain' />  
            {/* 
            ||
            Debe Ser La Imagen Del Cultivo */}
          <Image source={require('@asset/img/cientifico.png')}
            style={infoScreen.img4} resizeMode='contain' />
          <Text style={infoScreen.name}>{StringsOfLanguages.name}</Text>
          <Text style={infoScreen.name}>{plants.name}</Text>
                      <Image source={{ uri: ('https://cdn-icons-png.flaticon.com/512/3812/3812766.png') }}
            style={infoScreen.img5} resizeMode='contain' />
            <Image source={require('@asset/img/cientifico.png')}
  style={infoScreen.img6} resizeMode='contain' />
                      <Image source={require('@asset/img/cientifico.png')}
            style={infoScreen.img6} resizeMode='contain' />
          <Divider />
          <Text style={infoScreen.nameScience}>{StringsOfLanguages.namescientific}</Text>
          <Text style={infoScreen.nameScience}>Eu qui incididunt</Text>
          <Divider />
          <Text style={infoScreen.nameScience}>{StringsOfLanguages.typeCultive}</Text>
          <Text style={infoScreen.nameScience}>Eu qui incididunt</Text>
          <Divider />
          <Text style={infoScreen.nameScience}>Veniam eiusmod dolor</Text>
          <Text style={infoScreen.nameScience}>Eu qui incididunt</Text>
          <Divider />
          {/* Preferiblemente dentro de un container para no tener problemas al agregar descripciones grandes. */}
          {/* Cuando Cultivar */}
          <Text style={infoScreen.title}>{StringsOfLanguages.cultive}</Text>
          <Image source={require('@asset/img/semilla.png')}
            style={infoScreen.img7} resizeMode='contain' />
          <Image source={require('@asset/img/calendario.png')}
            style={infoScreen.img8} resizeMode='contain' />
          <Image source={require('@asset/img/semilla.png')}
            style={infoScreen.img9} resizeMode='contain' />
          <Text style={infoScreen.name}>{StringsOfLanguages.germiny}</Text>
          <Text style={infoScreen.name}>Eu qui incididunt</Text>
          <Divider />
          <Text style={infoScreen.nameScience}>{StringsOfLanguages.harvest}</Text>
          <Text style={infoScreen.nameScience}>Eu qui incididunt</Text>
          <Divider />
          <Text style={infoScreen.nameScience}>{StringsOfLanguages.season}</Text>
          <Text style={infoScreen.nameScience}>Eu qui incididunt</Text>
          <Divider />
          {/* Como Cultivar */}
          <Image source={require('@asset/img/maceta.png')}
            style={infoScreen.img10} resizeMode='contain' />
          <Image source={require('@asset/img/transPlantar.png')}
            style={infoScreen.img11} resizeMode='contain' />
          <Image source={require('@asset/img/plantaCasa.png')}
            style={infoScreen.img12} resizeMode='contain' />
          <Image source={require('@asset/img/pisoTermico.png')}
            style={infoScreen.img13} resizeMode='contain' />
          <Image source={require('@asset/img/tempMax.png')}
            style={infoScreen.img14} resizeMode='contain' />
          <Image source={require('@asset/img/tempMin.png')}
            style={infoScreen.img15} resizeMode='contain' />
          <Image source={require('@asset/img/riego.png')}
            style={infoScreen.img16} resizeMode='contain' />
          <Image source={require('@asset/img/luz.png')}
            style={infoScreen.img17} resizeMode='contain' />
          <Image source={require('@asset/img/alturaMax.png')}
            style={infoScreen.img18} resizeMode='contain' />
          <Image source={require('@asset/img/alturaMax.png')}
            style={infoScreen.img19} resizeMode='contain' />
          <Image source={require('@asset/img/profundidad.png')}
            style={infoScreen.img20} resizeMode='contain' />
          <Image source={require('@asset/img/separacion.png')}
            style={infoScreen.img21} resizeMode='contain' />
          <Image source={require('@asset/img/suelo.png')}
            style={infoScreen.img22} resizeMode='contain' />
          <Image source={require('@asset/img/ph.png')}
            style={infoScreen.img23} resizeMode='contain' />
          <Image source={require('@asset/img/luna.png')}
            style={infoScreen.img24} resizeMode='contain' />
          <Text style={infoScreen.title}>{StringsOfLanguages.howCultive}</Text>
          <Text style={infoScreen.name}>{StringsOfLanguages.maceta}</Text>
          <Text style={infoScreen.name}>Eu qui incididunt</Text>
          <Divider />
          <Text style={infoScreen.nameScience}>{StringsOfLanguages.transplant}</Text>
          <Text style={infoScreen.nameScience}>Eu qui incididunt</Text>
          <Divider />
          <Text style={infoScreen.nameScience}>{StringsOfLanguages.homePlant}</Text>
          <Text style={infoScreen.nameScience}>Eu qui incididunt</Text>
          <Divider />
          <Text style={infoScreen.nameScience}>{StringsOfLanguages.Clime}</Text>
          <Text style={infoScreen.nameScience}>Eu qui incididunt</Text>
          <Divider />
          <Text style={infoScreen.nameScience}>{StringsOfLanguages.temperatureMax}</Text>
          <Text style={infoScreen.nameScience}>Eu qui incididunt</Text>
          <Divider />
          <Text style={infoScreen.nameScience}>{StringsOfLanguages.temperatureMin}</Text>
          <Text style={infoScreen.nameScience}>Eu qui incididunt</Text>
          <Divider />
          <Text style={infoScreen.nameScience}>{StringsOfLanguages.amountIrrigation}</Text>
          <Text style={infoScreen.nameScience}>Eu qui incididunt</Text>
          <Divider />
          <Text style={infoScreen.nameScience}>{StringsOfLanguages.solar}</Text>
          <Text style={infoScreen.nameScience}>Eu qui incididunt</Text>
          <Divider />
          <Text style={infoScreen.nameScience}>{StringsOfLanguages.heighMax}</Text>
          <Text style={infoScreen.nameScience}>Eu qui incididunt</Text>
          <Divider />
          <Text style={infoScreen.nameScience}>{StringsOfLanguages.depth}</Text>
          <Text style={infoScreen.nameScience}>Eu qui incididunt</Text>
          <Divider />
          <Text style={infoScreen.nameScience}>{StringsOfLanguages.separationPlants}</Text>
          <Text style={infoScreen.nameScience}>Eu qui incididunt</Text>
          <Divider />
          <Text style={infoScreen.nameScience}>{StringsOfLanguages.type}</Text>
          <Text style={infoScreen.nameScience}>Eu qui incididunt</Text>
          <Divider />
          <Text style={infoScreen.nameScience}>{StringsOfLanguages.ph}</Text>
          <Text style={infoScreen.nameScience}>Eu qui incididunt</Text>
          <Divider />
          <Text style={infoScreen.nameScience}>{StringsOfLanguages.moon}</Text>
          <Text style={infoScreen.nameScience}>Eu qui incididunt</Text>
          <Divider />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

