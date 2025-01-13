"use client";
import { ActionIcon, Avatar, Button, Card, Center, Container, Divider, Flex, getGradient, Group, Image, SimpleGrid, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { IconBrandFacebook, IconBrandLinkedin, IconBrandTwitter, IconCalendar, IconGavel, IconMail, IconPhone } from "@tabler/icons-react";
import { PRACTICE_AREAS_LIST } from "./utils/lists";
import { GroupPlaybackControls } from "framer-motion";

export default function Home() {
  const theme = useMantineTheme();
  return (
    <>
      <Container size={"lg"} mih={"100vh"}>
        <div
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100vw",
            height: "100%",
            minHeight: "100vh",
            zIndex: -4,
            overflow: "hidden",
            background: "rgba(0,0,0,0.65)",
          }}
        />
        <div
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100vw",
            height: "100%",
            minHeight: "100vh",
            zIndex: -5,
            overflow: "hidden",
          }}
        >
          <Image src={"/images/hero_bg_1.jpg"} alt="River background" w={"100%"} h={"100%"} />
        </div>
        <SimpleGrid cols={{ base: 1, md: 2 }} mt={{ base: "3em", md: "10em" }}>
          <Stack gap="md" align="center" justify="center">
            <Title c={"white"} fw={800} order={1} size={"3em"} visibleFrom="sm" display={"flex"}>
              Advocate Sachchida Nand Kishore Prasad Sinha
            </Title>
            <Title c={"white"} fw={800} order={1} size={"2em"} hiddenFrom="sm">
              Advocate Sachchida Nand Kishore Prasad Sinha
            </Title>
            <Text c={"white"} size={"lg"}>
              Advocate Sachchida Nand Kishore Prasad Sinha has been practicing and handling cases independently with a result oriented approach, both professionally and ethically and has now acquired
              many years of professional experience in providing legal consultancy and advisory services
            </Text>
          </Stack>
          <Flex align={"center"} justify={"center"}>
            <Card shadow="sm" padding="lg" radius="md" withBorder w={{ base: "100%", md: "80%" }}>
              <Stack gap="md">
                <Text size="xl" fw={700} ta={"center"}>
                  Book An Appointment
                </Text>
                <Button className="hoverBtn" color="primary.9" variant="filled" size="lg" radius="md">
                  <Group>
                    <IconPhone size={20} />
                    Call
                  </Group>
                </Button>
                <Button className="hoverBtn" color="secondary.9" variant="filled" size="lg" radius="md">
                  <Group>
                    <IconMail size={20} />
                    Email
                  </Group>
                </Button>
              </Stack>
            </Card>
          </Flex>
        </SimpleGrid>
      </Container>
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100vw",
            height: "100%",
            minHeight: "100vh",
            zIndex: -4,
            overflow: "hidden",
            background: theme.colors.primary[1],
          }}
        />
        <Container size={"lg"} mih={"100vh"} pos={"relative"} py={"3em"} id="about">
          <Flex align={"center"} justify={"space-evenly"} direction={"column"} mt={"3em"}>
            <Title order={2} fw={800} size={"2em"} ta={"center"} c={"primary.9"} hiddenFrom="sm">
              About
            </Title>
            <Title order={2} fw={800} size={"3em"} ta={"center"} c={"primary.9"} visibleFrom="sm" my={"2em"}>
              About
            </Title>
            <Text size="lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero possimus aliquid qui voluptatem atque minus doloremque reiciendis nulla illo. Quibusdam aliquam illo optio eligendi quisquam
              ea quia facere ex porro? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis labore totam modi fugit nulla atque explicabo rerum molestias magni autem commodi ex obcaecati
              excepturi, distinctio dignissimos. Delectus deleniti ipsum vitae.
            </Text>
          </Flex>
        </Container>
        <Container size={"lg"} mih={"100vh"} pos={"relative"} py={"3em"} id="practice-areas">
          <Title order={2} fw={800} size={"2em"} ta={"center"} c={"primary.9"} hiddenFrom="sm">
            Practice Areas
          </Title>
          <Title order={2} fw={800} size={"3em"} ta={"center"} c={"primary.9"} visibleFrom="sm">
            Practice Areas
          </Title>
          <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} mt={"2em"}>
            {PRACTICE_AREAS_LIST.map((val: string, index: number) => (
              <Card
                className="hoverBtn"
                mih={"200px"}
                key={index}
                mt={"2em"}
                shadow="sm"
                radius="lg"
                p="lg"
                w={260}
                style={{
                  background: getGradient({ deg: 130, from: "primary.4", to: "secondary.3" }, theme),
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                mx={"auto"}
              >
                <Stack gap={"1em"}>
                  <Center>
                    <IconGavel size={40} color="white" />
                  </Center>

                  <Title ta="center" fw={700} size="24px">
                    {val}
                  </Title>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
        <Container mih={"100vh"} size={"lg"} pos={"relative"} py={"3em"} id="contact">
          <Title order={2} fw={800} size={"2em"} ta={"center"} c={"primary.9"} hiddenFrom="sm">
            Contact
          </Title>
          <Title order={2} fw={800} size={"3em"} ta={"center"} c={"primary.9"} my={"2em"} visibleFrom="sm">
            Get In Touch
          </Title>
          <Flex align={"center"} justify={"center"} mt={"2em"} mb={"3em"}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              w={{ base: "100%", md: "80%" }}
              style={{
                background: getGradient({ deg: 130, from: "primary.1", to: "primary.2" }, theme),
                color: "#FFFFFF",
                border: `1px solid ${theme.colors.primary[9]}`,
                boxShadow: "0px 0px 25px 0px rgba(77, 149, 234, 0.50)",
              }}
            >
              <Group justify="space-evenly">
                <Stack align="center" maw={"250px"}>
                  <Image src="/advocate-skp-sinha.jpg" alt="Advocate Sachchida Nand Kishore Prasad Sinha" w={175} h={175} radius={"lg"} />
                  <Title ta={"center"} c={"primary.9"} size={"24px"} fw={700} order={1}>
                    Adv. Sachchida Nand Kishore Prasad Sinha
                  </Title>
                  <Title ta={"center"} c={"primary.7"} size={"16px"} fw={700} order={2}>
                    Associate Professor
                  </Title>
                </Stack>
                <Stack gap="md" align="center">
                  <Text size="md" ta={"center"} c={"primary.9"}>
                    Advocate Sachchida Nand Kishore Prasad Sinha has been practicing law for over 20 years, specializing in civil and criminal cases. He is known for his dedication to his clients and
                    his commitment to justice.
                  </Text>
                  <Text size="xl" ta={"center"} c={"primary.9"}>
                    Phone: <b>+1234567890</b>
                  </Text>
                  <Text ta={"center"} size="xl" c={"primary.9"}>
                    Email: <b>example@example.com</b>
                  </Text>

                  <Group gap={0} className={"footerSocial"} justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" variant="subtle" component="a" c={"primary.9"} href="https://twitter.com/">
                      <IconBrandTwitter size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="subtle" c={"primary.9"} component="a" href="https://www.facebook.com/">
                      <IconBrandFacebook size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="subtle" c={"primary.9"} component="a" href="https://www.linkedin.com/in/">
                      <IconBrandLinkedin size={18} stroke={1.5} />
                    </ActionIcon>
                  </Group>
                </Stack>
              </Group>
            </Card>
          </Flex>
        </Container>
      </div>
    </>
  );
}
