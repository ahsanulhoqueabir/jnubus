import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function SettingMainPage() {
    return <View>  
        <Link href={'./faq'}>
            <Text>
                FAQ
           </Text>
        </Link>
    </View>
};
