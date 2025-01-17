import { Text } from ".."
import { extendTheme } from "../extend-theme"
import { Provider as ChakraProvider } from "../provider"

export default {
  title: "Components / Typography / Text",
}

const theme = extendTheme({
  components: {
    Text: {
      variants: {
        customCaps: {
          textTransform: "uppercase",
        },
      },
    },
  },
})

// see https://github.com/chakra-ui/chakra-ui/issues/2464
export const withVariant = () => (
  <ChakraProvider theme={theme}>
    <Text variant="customCaps">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, sapiente.
    </Text>
  </ChakraProvider>
)

// see https://github.com/chakra-ui/chakra-ui/issues/2464
export const overrideVariant = () => (
  <ChakraProvider theme={theme}>
    <Text variant="customCaps" casing="lowercase">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, sapiente.
    </Text>
  </ChakraProvider>
)
