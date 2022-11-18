import { Center, Icon, Text } from 'native-base'
import Logo from "../assets/logo.svg";
import { Button } from '../components/Button';
import { Fontisto } from '@expo/vector-icons';

import { useAuth } from '../hooks/useAuthContext'

export function Signin() {
  const { signIn, user } = useAuth()

  console.log(user)
  return (
    <Center flex={1} bgColor="gray.900" p={7}>
      <Logo width={212} height={40} />
      <Button
        type='SECUNDARY'
        title="ENTRAR COM GOOGLE"
        marginTop={12}
        leftIcon={<Icon as={Fontisto} name="google" color='white' size='md' />}
        onPress={signIn}
      />
      <Text color="white" textAlign='center' marginTop={4}>
        Não utilizamos nenhuma informação além {'\n'} do seu e-mail para criação de sua conta.
      </Text>
    </Center>
  )
}
