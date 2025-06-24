import { View, ScrollView, StyleSheet, TouchableOpacity, Linking, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';


const stepImage = require('../assets/adaptive-icon.png');
const sleepImage = require('../assets/favicon.png');
const waterImage = require('../assets/icon.png');
const heartImage = require('../assets/splash-icon.png');

export default function Dashboard() {
    const [steps, setSteps] = useState(0);
    const [sleepHours, setSleepHours] = useState(0);
    const [hydration, setHydration] = useState(0);
    const [heartRate, setHeartRate] = useState(0);

    useEffect(() => {
        // Simula carregamento dos dados ao abrir o app
        setSteps(7345);
        setSleepHours(7.5);
        setHydration(1.8);
        setHeartRate(76);
    }, []);

    const openHealthInfo = () => {
        Linking.openURL('https://www.who.int/health-topics');
    };

    return (
        <View style={styles.container}>
            <Header />

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardShadow}>
                        <InfoCard
                            title="Passos Hoje"
                            value={steps.toLocaleString()}
                            unit="passos"
                            iconName="walking"
                            iconType="FontAwesome5"
                            progress={steps / 10000}
                            color="#6C63FF"
                            image={stepImage}
                            gradient={['#6C63FF', '#8A85FF']}
                        />
                    </View>

                    <View style={styles.cardShadow}>
                        <InfoCard
                            title="Sono Noturno"
                            value={sleepHours.toString()}
                            unit="horas"
                            iconName="moon-outline"
                            iconType="Ionicons"
                            progress={sleepHours / 8}
                            color="#10B981"
                            image={sleepImage}
                            gradient={['#10B981', '#34D399']}
                        />
                    </View>
                </View>

                <View style={styles.cardContainer}>
                    <View style={styles.cardShadow}>
                        <InfoCard
                            title="Hidratação"
                            value={hydration.toString()}
                            unit="litros"
                            iconName="water-outline"
                            iconType="Ionicons"
                            progress={hydration / 2}
                            color="#3B82F6"
                            image={waterImage}
                            gradient={['#3B82F6', '#60A5FA']}
                        />
                    </View>

                    <View style={styles.cardShadow}>
                        <InfoCard
                            title="Frequência Cardíaca"
                            value={heartRate.toString()}
                            unit="bpm"
                            iconName="heart-pulse"
                            iconType="MaterialCommunityIcons"
                            color="#EF4444"
                            image={heartImage}
                            gradient={['#EF4444', '#F87171']}
                            isLastCard
                        />
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.moreInfoButton}
                    onPress={openHealthInfo}
                    activeOpacity={0.8}
                >
                    <View style={styles.buttonContent}>
                        <MaterialCommunityIcons name="lightbulb-on-outline" size={24} color="#6C63FF" />
                        <Text style={styles.moreInfoText}>Ver mais informações</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#6C63FF" />
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FAFC',
    },
    content: {
        paddingVertical: 16,
        paddingBottom: 32,
        gap: 16,
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        gap: 16,
        marginBottom: 20,
    },
    cardShadow: {
        flex: 1,
        borderRadius: 20, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 6,
      },
      
    moreInfoButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        marginHorizontal: 16,
        marginTop: 8,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    moreInfoText: {
        color: '#4F46E5',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Inter-SemiBold',
    },
});
