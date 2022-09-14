import React from 'react'
import { Navbar, Button, Text, useTheme } from "@nextui-org/react";

const NavbarMenu = () => {
  const variant = "default";

  const {isDark} = useTheme();

  return (
      <Navbar isBordered={isDark} variant="sticky">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="ls">
            Sitio de recuperación de contraseña
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant={variant}>
          <Navbar.Link href="/">
            <Button>Inicio</Button>
          </Navbar.Link>
        </Navbar.Content>
      </Navbar>
  )
}

export default NavbarMenu