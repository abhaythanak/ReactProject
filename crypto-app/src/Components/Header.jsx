import { HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ToggleColorMode from "./ToggleColorMode";

export default function Header() {
    return(
        <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
        <Button variant={"unstyled"} color={"white"}>
          <Link to="/">Home</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"}>
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"}>
          <Link to="/coins">Coins</Link>
        </Button>
        <ToggleColorMode />
      </HStack>
    )
}

