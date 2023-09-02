import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: {id: string};
  Welcome: undefined;
};

export interface PropsScreen
  extends NativeStackScreenProps<
    RootStackParamList,
    keyof RootStackParamList
  > {}
