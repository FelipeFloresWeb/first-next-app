import { Box, Progress } from "@chakra-ui/react";

export function HealtBar() {
  return (
    <Box mt={8}>
      <Progress size="xs" isIndeterminate />
      <Progress colorScheme="green" height="28px" hasStripe value={80} />
    </Box>
  );
}
