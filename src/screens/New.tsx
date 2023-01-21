import { useState } from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { BackButton } from "../components/BackButton";
import { CheckBox } from "../components/CheckBox";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

const availableWeekDays = ['Domingo', 'Segunda-feira', 'Terça-Feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']

export function New() {

    const [weekDays, setWeekDays] = useState<number[]>([]);

    function handleToggleWeekDay(weekDayIndex: number) {
        if(weekDays.includes(weekDayIndex)) {
            setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex));

        } else {
            setWeekDays(prevState => [...prevState, weekDayIndex]);
        }
    }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <Text className="mt-6 text-white font-extrabold text-3xl">
          Criar hábito
        </Text>

        <Text className="mt-6 mb-4 text-white font-semibold text-base">
          Qual seu comprometimento?
        </Text>

        <TextInput className="h-12 pl-4 rounded-lg bg-zinc-900 text-white border-2 border-zinc-800 focus:border-green-600"
        placeholder="Exercícios, dormir bem, etc..."
        placeholderTextColor={colors.zinc[400]}
        />

        <Text className="font-semibold mb-3 text-white text-base">

        </Text>

        {
            availableWeekDays.map((weekDay, index) => (
                
                <CheckBox 
                key={weekDay}
                title={weekDay}
                checked={weekDays.includes(index)}
                onPress={() => handleToggleWeekDay(index)}
                />
            ))
        }
      
        <TouchableOpacity 
        className="w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6"
        activeOpacity={0.7}
        >
        <Feather 
        name="check"
        size={20}
        color={colors.white}
        />

        <Text className="font-semibold text-bsae text-white ml-2">
            Confirmar
        </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}