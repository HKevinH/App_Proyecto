import AsyncStorage from "@react-native-async-storage/async-storage";


const LANGUAGESELECT = '@language:key'

async function SaveLanguage(languaje){
    try{
        await AsyncStorage.saveAsync(LANGUAGESELECT, JSON.stringify(language));
        return JSON.stringify(language);
    }catch(error){
        // console error
        console.log('Error Al Guardar' + error.message);
        return "Error De Sintaxis";
    }   
}

async function getLenguage(language){
    try{
        const item = await AsyncStorage.getItem(LANGUAGESELECT);
        return JSON.parse(language);
    }
    catch(error){
        // console error
    console.log('Error Al Recuperar' + error.message);
    return null;    
    }
}

export {SaveLanguage, getLenguage}