import { Text, View, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface Props extends TouchableOpacityProps {
  checked?: boolean;
  title: string;
}

export function CheckBox({ title, checked = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row mb-2 items-center"
      {...rest}
    >
      {checked ? (
        <View className="h-8 bg-green-500 rounded-lg items-center justify-center w-8">
          <Feather name="check" size={20} color={Colors.white} />
        </View>
      ) : (
        <View className="h-8 w-8 bg-zinc-900 rounded-lg" />
      )}

      <Text className="text-white text-base ml-3 font-semibold">{title}</Text>
    </TouchableOpacity>
  );
}
