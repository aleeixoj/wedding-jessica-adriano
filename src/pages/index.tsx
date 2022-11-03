import {
  Flex,
  Image,
  Box,
  Spacer,
  Heading,
  Text,
  Button
} from '@chakra-ui/react';
import { Input } from '../components/input';
import BeatLoader from "react-spinners/BeatLoader";
import { Form } from '@unform/web';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Link from 'next/link';
import Router from 'next/router';
import { useState, useEffect, CSSProperties } from 'react';
import { useCookies } from 'react-cookie';
import { BsHeartFill } from 'react-icons/bs';
import { CgCloseO } from 'react-icons/cg';
import ReactModal from 'react-modal';
import { CustomRadio } from '../components/CustomRadio';

import Page from '../components/page/Page';
import { useAuth } from '../context/auth';
import { api } from '../services/api';



const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [accessModal, setAccessModal] = useState(false);
  const [cookie] = useCookies(['access_code']);
  const [loading, setLoading] = useState(false);
  const { signIn, loginError, responseData, loadData } = useAuth();

  async function handleGet(requestData: any) {
    requestData = {
      access_code: requestData.access_code.toLowerCase(),
    }
    setLoading(true);
    await signIn(requestData);
    await loadData()
    setTimeout(() => {
      setAccessModal(false);
      setOpenModal(true);
      setLoading(false);
    }, 1000);

  }
  const userConfirmed: any = [];
  const options = ['Pendente', 'Confirmado', 'Não comparecerá'];

  async function handleSubmit() {
    delete userConfirmed[-1];

    const response = await api.post(`/confirm/create/${cookie.access_code}`, {
      data: userConfirmed,
    });

    if (response.data.message === 'sucess') {
      loadData();
      setOpenModal(false);
    }
  }

  async function prepareUserConfirmed(
    userId: string,
    status: boolean | string
  ) {
    if (status === true || status === false) {
      const newUser = userConfirmed.filter((user: any) => user.id === userId);

      if (newUser.length === 0) {
        userConfirmed.push({ id: userId, status });
      } else {
        const i = userConfirmed.indexOf((user: any) => user.id === userId);
        newUser[0].status = status;
        userConfirmed[i] = newUser;
      }
    }
  }

  async function handleRadioChange(value: string, userId: string) {
    let status;

    if (value === 'Confirmado') {
      status = true;
    } else if (value === 'Não comparecerá') {
      status = false;
    } else {
      status = 'Pendente';
    }
    prepareUserConfirmed(userId, status);
  }

  async function handleAccessModal() {
    if (cookie.access_code) {
      setAccessModal(false);
      setOpenModal(true);
    }

    if (!cookie.access_code) {
      setAccessModal(true);
    }
  }


  return (
    <Page title="Adriano e Jessica" description="Adriano e Jessica te convidam">
      <Flex
        justify={'center'}
        align={'center'}
        direction={'column'}
        width="full"
        sx={{
          '@media(min-width: 720px)': {
            height: '100vh',
          },
        }}
        bg={
          'url(https://img.freepik.com/fotos-premium/imagem-de-fundo-de-rosas-cor-de-rosa_39131-155.jpg?w=2000)'
        }
      >
        <Box
          bg={'red.50'}
          boxSize={'90%'}
          boxShadow={'0px 0px 15px 1px rgba(0,0,0,0.4)'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
          padding={'1rem 0'}
        >
          <motion.div
            initial={{ rotate: 180, scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            <Image
              src={'/foto.jpeg'}
              objectFit={'cover'}
              boxSize="15rem"
              borderRadius="full"
              alt="Adriano e Jessica"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            <Box textAlign={'center'}>
              <Spacer p="1.5" />
              <Text
                px="1"
                sx={{
                  '@media(max-width: 768px)': { fontSize: '0.9rem' },
                }}
              >
                “Todos verão esse milagre e compreenderão que foi a mão do Senhor, o Santo de Israel, quem fez tudo isso."  Isaias 41:20
              </Text>

              <Spacer p="1.5" />
              <Heading
                fontFamily="Amatic SC"
                // fontFamily="Shadows Into Light"
                fontWeight={'300'}
                fontSize={'6xl'}
                color={'pink.500'}
              >
                Adriano e Jessica
              </Heading>
              <Spacer p="2" />
              <Text>Convidam para comemorar</Text>
              <Text>o seu casamento</Text>
              <Spacer p="3" />
              <Heading
                fontFamily="Amatic SC"
                fontWeight={'300'}
                fontSize={'5xl'}
              >
                26 de novembro de 2022 às 16:00
              </Heading>

              <Spacer p="2" />
              <Heading fontSize={'2xl'}>Local:</Heading>
              <Text>Rua Maria Moreira Frotte, 41</Text>
              <Text>Almirante Tamandaré - PR</Text>
            </Box>
          </motion.div>
          <Spacer p="5" />
          <Flex
            justify="space-evenly"
            align="center"
            width={'full'}
          >
            <Box
              bg="gray.200"
              width={'45%'}
              height={'1px'}></Box>
            <Image src={'/couple.svg'} w={"9"} />
            <Box
              bg="gray.200"
              width={'45%'}
              height={'1px'}></Box>
          </Flex>
          <Spacer p="5" />
          <Flex
            justify="center"
            align="center"
            direction={'column'}
            gap={'1rem'}
          >
            <Button
              bg={'blue.300'}
              color={'white'}
              _hover={{ bg: 'blue.400' }}
              _active={{ bg: 'blue.400' }}
              _focus={{ boxShadow: 'var(--colors-pink-800)' }}
            >
              <Link
                href={
                  'https://www.finalfeliz.de/jessica-aparecida-dos-santos-adriano-barbosa-de-sa'
                }
              >
                <a target="_blank" rel="noreferrer">
                  Lista de presentes
                </a>
              </Link>
            </Button>
            {/* <Button
              bg={'pink.300'}
              color={'white'}
              _hover={{ bg: 'pink.400' }}
              _active={{ bg: 'pink.400' }}
              _focus={{ boxShadow: 'var(--colors-pink-800)' }}

              onClick={() => handleAccessModal()}
            >
              Confirmar presença
            </Button> */}

          </Flex>
          <Spacer p="10" />
        </Box>

        <ReactModal isOpen={loading}
          style={{
            content: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '40rem',
              height: '40rem',
              margin: '0 auto',
              background: 'transparent',
              padding: '0 0.2rem',
              overflowY: 'auto',
              overflowX: 'hidden',
              border: 'none',
              zIndex: '999'
            },
            overlay: {
              zIndex: '999'
            }
          }}>
          <Flex justify={'center'}
            align={'center'}
            direction={'column'}
            p="2"
            height={'100vh'}>
            <BeatLoader
              color={'pink'} loading={loading} cssOverride={override} size={30} />
          </Flex>
        </ReactModal>

        <ReactModal isOpen={accessModal}
          style={{
            content: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '40rem',
              height: '20rem',
              margin: '0 auto',
              background: 'var(--chakra-colors-white)',
              boxShadow: '0px 0px 15px 1px rgba(0,0,0,0.4)',
              padding: '0 0.2rem',
              borderRadius: '1rem',
              overflowY: 'auto',
              overflowX: 'hidden',
            },
          }}>
          <Flex
            justify={'center'}
            align={'center'}
            direction={'column'}
            p="2"
            height={'100vh'}
          >
            <Form onSubmit={(requestData: any) => handleGet(requestData)}>
              <Flex justify={'center'} align={'center'} direction={'column'} p="2">
                <Text>Digite seu código de acesso para continuar</Text>
                <Spacer p="2" />
                <Input
                  name="access_code"
                  label={'Codigo de acesso'}
                  error={loginError}
                />
                <Spacer p="2" />
                <Button
                  bg={'purple.300'}
                  color={'white'}
                  _hover={{ bg: 'purple.400' }}
                  _active={{ bg: 'purple.400' }}
                  _focus={{ boxShadow: 'var(--colors-purple-800)' }}
                  type="submit"
                >
                  Enviar
                </Button>
              </Flex>
            </Form>
          </Flex>
        </ReactModal>




        <ReactModal
          isOpen={openModal}
          style={{
            content: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '40rem',
              height: '42rem',
              margin: '0 auto',
              background: 'var(--chakra-colors-white)',
              boxShadow: '0px 0px 15px 1px rgba(0,0,0,0.4)',
              padding: 'unset',
              borderRadius: '0.5rem',
              overflowY: 'auto',
              overflowX: 'hidden',
            },
          }}
        >
          <Flex width="full" bg={'blue.300'} justify={'space-between'} align={"center"} px="1rem">
            <Flex justify={'center'} align={"center"} gap={"2rem"}>
              <Text fontSize={'1xl'} fontWeight={'600'} color="white" >
                Confirme sua presença
              </Text>
              <Text fontSize={'1xl'} fontWeight={'600'} color="white"> - </Text>
              <Text textTransform={"capitalize"} fontSize={'1xl'} fontWeight={'600'} color="white" id="familyName">{responseData?.name}</Text>
            </Flex>
            <Button
              p="1rem"
              onClick={() => setOpenModal(false)}
              _hover={{ background: 'none', color: 'gray.100' }}
              _focus={{ border: 'none', boxShadow: 'none' }}
              _active={{ border: 'none', boxShadow: 'none' }}
              bg={"none"}
              color="white"
              justifyContent={'flex-end'}
            >
              <CgCloseO />
            </Button>
          </Flex>

          <Flex
            direction={'column'}
            padding={'2rem 0.5rem'}
            justify={'center'}
            align={'center'}
          >

            <Spacer p="2" />
            <Heading fontSize={'2xl'} fontWeight={'500'}>
              Convidados
            </Heading>
            {responseData?.users?.map((user: any) => {
              return (
                <Flex
                  justify={'center'}
                  align={'center'}
                  direction={'column'}
                  sx={{
                    '@media(max-width: 768px)': {},
                  }}
                  key={user.id}
                  border={'1px solid var(--chakra-colors-gray-100)'}
                  margin={'0.8rem 0'}
                  padding={'1rem'}
                  borderRadius={'1rem'}
                >
                  <Text fontWeight={'semibold'} fontSize={'1xl'}>
                    {user.name}
                  </Text>
                  <Spacer py="1" />
                  <CustomRadio
                    options={options}
                    defaultValue={
                      user.isConfirmed === true
                        ? 'Confirmado'
                        : user.isConfirmed === false
                          ? 'Não comparecerá'
                          : 'Pendente'
                    }
                    onChange={(value) => handleRadioChange(value, user.id)}
                  />
                </Flex>
              );
            })}
            <Spacer py="1" />

            <Text >Confirmar até 23/10/2022</Text>

            <Spacer py="1" />

            <Button
              bg={'pink.300'}
              color={'white'}
              _hover={{ bg: 'pink.400' }}
              _active={{ bg: 'pink.400' }}
              _focus={{ boxShadow: 'var(--colors-pink-800)' }}
              height={'2rem'}
              onClick={() => handleSubmit()}
            >
              Enviar
            </Button>
            {/* <Button
                bg={'purple.300'}
                color={'white'}
                _hover={{ bg: 'purple.400' }}
                _active={{ bg: 'purple.400' }}
                _focus={{ boxShadow: 'var(--colors-purple-800)' }}
                height={'2rem'}
                onClick={() => setOpenModal(false)}
              >
                Fechar
              </Button> */}
          </Flex>
        </ReactModal>
      </Flex >
    </Page >
  );
};

export default Home;
