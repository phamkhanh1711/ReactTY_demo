import { Box, Stack } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function MenuLeft() {
  return (
    <Box>
      <Stack
        style={{ marginTop: "10%" }}
        mr={-10}
        p={10}
        direction="column"
        spacing={2}>
        <Box>
          <Accordion
            sx={{
              boxShadow: "none", // Removes the shadow
              border: "none", // Removes the border
              "&::before": {
                // Removes the pseudo-element border
                display: "none",
              },
            }}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header">
              <Typography
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    transition: "0.4s ease-in-out",

                    color: "#f50963",
                  },
                }}>
                Planer & Virtual
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "0",
                "& li": {
                  fontSize: "17px",
                  ml: "12px",
                  padding: "7px",
                  "&:hover": {
                    transition: "0.3s ease-in-out",
                    cursor: "pointer",
                    color: "#f50963",
                    backgroundColor: "#f5f5f5",
                  },
                },
              }}>
              <li>Planer</li>
              <li>Virtual </li>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              boxShadow: "none", // Removes the shadow
              border: "none", // Removes the border
              "&::before": {
                // Removes the pseudo-element border
                display: "none",
              },
            }}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header">
              <Typography
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    transition: "0.4s ease-in-out",

                    color: "#f50963",
                  },
                }}>
                Computers Monitor & Laptop
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "0",
                "& li": {
                  fontSize: "17px",
                  ml: "12px",
                  padding: "7px",
                  "&:hover": {
                    transition: "0.3s ease-in-out",
                    cursor: "pointer",
                    color: "#f50963",
                    backgroundColor: "#f5f5f5",
                  },
                },
              }}>
              <li>Computer </li>
              <li>Laptop </li>
              <li>Monitor</li>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Stack>
    </Box>
  );
}

export default MenuLeft;
