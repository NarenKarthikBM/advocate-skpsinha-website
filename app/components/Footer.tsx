"use client";

import { IconBrandFacebook, IconBrandLinkedin, IconBrandTwitter, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import { ActionIcon, Avatar, Box, Container, Divider, Group, Image, Stack, Text, useMantineTheme } from "@mantine/core";
import Link from "next/link";

const data = [
  {
    title: "Links1",
    links: [
      { name: "Home", href: "/home/" },
      { name: "About", href: "/about/" },
      { name: "Practice Areas", href: "/practice-areas/" },
      { name: "Contact", href: "/contact/" },
    ],
  },
];

export function Footer() {
  const theme = useMantineTheme();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text key={index} className={"footerLink"} style={{ display: "block", padding: "3px 0" }} component={Link} href={link.href} onClick={(event) => event.preventDefault()} fw={700}>
        {link.name}
      </Text>
    ));

    return (
      <div key={group.title} style={{ width: "160px" }}>
        {links}
      </div>
    );
  });

  return (
    <footer style={{ backgroundColor: theme.colors.primary[2], padding: "2em 0" }}>
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Group w={"150px"}>
            <Avatar src="/advocate-skp-sinha.jpg" alt="advocate skp sinha" size={"lg"} />
            <Text size={"1.25rem"} fw={700}>
              Adv. SKP Sinha
            </Text>
          </Group>
          <Stack mt={"2em"}>
            <Group>
              <IconMapPin width={20} height={20} />
              <Text fw={700}>Jigani, Bangalore / Bengaluru</Text>
            </Group>
            <Divider color={"black"} />
            <Group>
              <IconPhone size={20} />
              <Text fw={700} component="a" href="tel:+917556691383">
                +91-7556691383
              </Text>
            </Group>
            <Divider color={"black"} />
            <Group>
              <IconMail size={20} />
              <Text fw={700} component="a" href="mailto:kgaurav@iiserb.ac.in">
                sample@gmail.com
              </Text>
            </Group>
          </Stack>
        </Box>
        <Box visibleFrom="md" style={{ display: "flex", flexWrap: "wrap" }}>
          {groups}
        </Box>
      </Container>
      <Container className={"afterFooter"} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2em", padding: "1em 0", borderTop: "1px solid black" }}>
        <Text size="sm">Copyright © 2025 - All Rights Reserved - Advocate Sachchida Nand Kishore Prasad Sinha</Text>

        <Group gap={0} className={"footerSocial"} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="subtle" component="a" href="https://twitter.com/">
            <IconBrandTwitter size={18} stroke={1.5} color="black" />
          </ActionIcon>
          <ActionIcon size="lg" variant="subtle" component="a" href="https://www.facebook.com/">
            <IconBrandFacebook size={18} stroke={1.5} color="black" />
          </ActionIcon>
          <ActionIcon size="lg" variant="subtle" component="a" href="https://www.linkedin.com/in/">
            <IconBrandLinkedin size={18} stroke={1.5} color="black" />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
