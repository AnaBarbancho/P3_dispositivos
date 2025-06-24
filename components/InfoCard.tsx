import React from 'react';
import { View, Text, StyleSheet, Image, ColorValue } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialIcons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

interface InfoCardProps {
  title: string;
  value: string;
  unit: string;
  iconName: string;
  iconType: 'Ionicons' | 'MaterialIcons' | 'FontAwesome5' | 'MaterialCommunityIcons';
  progress?: number;
  color: string;
  image?: any;
  gradient?: readonly [ColorValue, ColorValue, ...ColorValue[]];
  isLastCard?: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  value,
  unit,
  iconName,
  iconType,
  progress,
  color,
  image,
  gradient = ['#fff', '#fff'] as const,
  isLastCard = false,
}) => {
  const IconComponent = {
    Ionicons,
    MaterialIcons,
    FontAwesome5,
    MaterialCommunityIcons,
  }[iconType];

  return (
    <View style={[styles.card, !isLastCard && styles.cardMargin]}>
      {/* Gradiente cobre 100% do card, com borderRadius e overflow hidden */}
      <LinearGradient
        colors={gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>{value}</Text>
              <Text style={styles.unit}>{unit}</Text>
            </View>
          </View>

          {image && (
            <Image 
              source={image} 
              style={styles.image} 
              resizeMode="contain"
            />
          )}

          <View style={styles.iconContainer}>
            <IconComponent name={iconName} size={24} color="white" />
          </View>
        </View>

        {progress !== undefined && (
          <View style={styles.progressBarContainer}>
            <View 
              style={[
                styles.progressBar, 
                { width: `${Math.min(progress * 100, 100)}%`, backgroundColor: color }
              ]} 
            />
          </View>
        )}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden', // essencial para cortar bordas do gradiente corretamente
  },
  cardMargin: {
    marginBottom: 16,
  },
  gradient: {
    flex: 1,             // Faz o gradiente ocupar todo o espaço do card
    padding: 16,
    borderRadius: 20,    // mesmo borderRadius do card para arredondar
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    opacity: 0.9,
    marginBottom: 8,
    fontFamily: 'Inter-Medium',
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  value: {
    color: 'white',
    fontSize: 28,
    fontWeight: '700',
    fontFamily: 'Inter-Bold',
    marginRight: 8,
  },
  unit: {
    color: 'white',
    fontSize: 16,
    opacity: 0.8,
    fontFamily: 'Inter-Regular',
  },
  iconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    marginHorizontal: 12,
  },
  progressBarContainer: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 3,
    marginTop: 16,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 3,
  },
});

export default InfoCard;
