import { StyleSheet, Text, View, Image } from 'react-native';
import { Div } from '../src/Components/HistoricoHoras';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Footer } from '../src/Components/footer';
import { Header } from '../src/Components/header';
import { Alata_400Regular, useFonts } from '@expo-google-fonts/alata';
import Logo from './Logo';


export default function Page() {
    let [fontsLoaded] = useFonts({
        Alata_400Regular,
      });
    
      if (!fontsLoaded) {
        return null;
      }
    return (
        <View style={styles.container}>
         <Logo/>

            <Text style={styles.text}>
                Histórico
            </Text>

            <View style={[styles.ccontainer, styles.shadowProp]}>
                <SimpleLineIcons name="user" size={18} color="#ADADAD" />

                <Text style={styles.select}>
                    Selecione o estudante
                </Text>

                <AntDesign name="caretdown" size={18} color="#ADADAD" />
            </View>

            <Div />
            <Div />
            <Div />
            <Div />
            <Div />
            <Link href="Home_Pai">
                <Text style={styles.text}>
                    Voltar
                </Text>
            </Link>

            <Footer/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        fontSize: 20,
        padding: 10,
        margin: 20,
        fontFamily:"Alata_400Regular",
    },
    shadowProp: {
        shadowOffset: { width: 4, height: 4 },
        shadowColor: '#696969',
        shadowOpacity: 1,
        shadowRadius: 3,
    },
    ccontainer: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#fff",
        padding: 10,
        margin: 5,
        shadowColor: '#000',
        borderRadius: 5,
        marginBottom: 0,
        alignItems: 'center'
    },
    select: {
        color: '#BFBFBF',
        fontFamily:"Alata_400Regular"
    }
});


