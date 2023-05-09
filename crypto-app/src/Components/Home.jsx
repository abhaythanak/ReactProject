import { Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Home() {
    return(
        <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src="https://www.freepnglogos.com/uploads/bitcoin-png/bitcoin-multiply-btc-pick-and-profit-5.png" alt="bitcoin, multiply btc pick and profit"
          filter={"grayscale(1)"}
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-24"}
      >
        Xcrypto
      </Text>
    </Box>
    )
}
