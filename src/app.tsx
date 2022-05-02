import React from "react";
import { Box, Button } from "@dots.cool/design-system";

export const App = () => (
  <Box>
    <Button
      onClick={() => {
        alert("click");
      }}
    >
      Test
    </Button>
  </Box>
);

export default App;
