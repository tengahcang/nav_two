import { Heading, Text, Center, Image } from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";

const NewsDetail = () => {
    const params = useLocalSearchParams();
    return (
        <>
            <Header title={"News"} withBack={true}/>
            <Image size="2xl" resizeMode="contain" 
                source={{
                    uri: params.image,
                }} alt="Image data"
            />
            <Text textAlign="left"> {params.date} </Text>
            <Center flex={1}>
                
                
      
                <Heading>{params.title}</Heading>
                <Text textAlign="center"> {params.title} </Text>
                <Text textAlign="center"> {params.content} </Text>
            </Center>
        </>
    );
};
export default NewsDetail;