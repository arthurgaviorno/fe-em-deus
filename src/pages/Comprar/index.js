import { View, Text} from "react-native/types";

export default function Comprar({ route }){
  const { filme } = route.params

  
    return (


    <View>
        <Text>{filme.titulo}</Text>
    </View>

    );
}