"use client";

import { Avatar, Box, Burger, Container, getGradient, Group, Menu, Modal, Stack, Tabs, Text, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconMail, IconPhone } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems: { name: string; href: string; dropdown?: { href: string; name: string }[] }[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  {
    name: "Practice Areas",
    href: "/#practice-areas",
    // dropdowns: [],
  },
  { name: "Contact", href: "/#contact" },
];

export function Header() {
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  const pathname = usePathname();

  const items = navItems.map((tab) => (
    <Tabs.Tab value={tab.name} key={tab.name} py={4}>
      {tab.dropdown == undefined ? (
        <Text
          size={pathname === tab.href ? "14px" : "14px"}
          fw={700}
          c="white"
          component={Link}
          href={`${tab.href}`}
          // td={pathname === tab.href ? "underline" : "none"}
        >
          {tab.name}
        </Text>
      ) : (
        <Menu width={120} position="bottom" radius="md" shadow="md" withinPortal>
          <Menu.Target>
            <Group align="center" gap={"sm"}>
              <Text
                size={"14px"}
                // fw={pathname === tab.href || tab.dropdown.map((dropdown) => dropdown.href).includes(pathname) ? 700 : 400}
                c="white"
                component={Link}
                href={`${tab.href}`}
                // td={pathname === tab.href || tab.dropdown.map((dropdown) => dropdown.href).includes(pathname) ? "underline" : "none"}
              >
                {tab.name}
              </Text>
              <IconChevronDown size={16} color="white" />
            </Group>
          </Menu.Target>

          <Menu.Dropdown style={{ overflow: "hidden", backgroundColor: theme.colors.primary[2] }}>
            {tab.dropdown.map((dropdown) => (
              <Menu.Item
                key={dropdown.name}
                styles={{
                  item: {
                    backgroundColor: theme.colors.primary[9],
                  },
                }}
              >
                <Text size="14px" c="white" component={Link} href={`${dropdown.href}`} fw={pathname === dropdown.href ? 700 : 400}>
                  {dropdown.name}
                </Text>
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      )}
    </Tabs.Tab>
  ));

  return (
    <div>
      <Modal
        opened={opened}
        onClose={toggle}
        title={<Text fw={700}>Menu</Text>}
        fullScreen
        styles={{ content: { backgroundColor: theme.colors.primary[2] }, header: { backgroundColor: theme.colors.primary[2] } }}
      >
        <Tabs defaultValue="Home" variant="filled">
          <Tabs.List w={"100%"}>
            <Stack justify="center" w={"100%"}>
              {items}
            </Stack>
          </Tabs.List>
        </Tabs>
      </Modal>
      <Box py="md" c={"white"} style={{ background: "linear-gradient(130deg, rgb(105, 68, 238) 0%, rgb(84, 161, 198) 100%)" }}>
        <Container size="lg">
          <Group justify="space-between" align="center">
            <Group w={"300px"}>
              <Avatar src={"/advocate-skp-sinha.jpg"} alt="advocate skp sinha" />
              <Text size={"1.25rem"} fw={700}>
                Adv. SKP Sinha
              </Text>
            </Group>
            <Group visibleFrom="md">
              <Group>
                <IconPhone size={20} />
                <Text size={"sm"} component="a" href="tel:+919939678937">
                  +91-99396 78937
                </Text>
              </Group>
              <Text size={"sm"}>|</Text>
              <Group>
                <IconMail size={20} />
                <Text size={"sm"} component="a" href="mailto:skpsinha44@gmail.com">
                  skpsinha44@gmail.com
                </Text>
              </Group>
            </Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
          </Group>
        </Container>
      </Box>
      <Box py={"xs"} style={{ backgroundColor: theme.colors.secondary[7] }} visibleFrom="md">
        <Container size="lg">
          <Tabs defaultValue="Home" variant="filled" visibleFrom="sm" styles={{ root: { justifyContent: "center" } }}>
            <Tabs.List>{items}</Tabs.List>
          </Tabs>
        </Container>
      </Box>
    </div>
  );
}
