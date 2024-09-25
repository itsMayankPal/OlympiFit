import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQs() {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", padding: "50px 0", width: "100%" }}>
      <Container>
        {/* FAQs Section Header */}
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: "bold", marginBottom: "30px", color: "#333" }}
        >
          Frequently Asked Questions
        </Typography>

        {/* FAQ 1 */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">What is this app about?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our app provides leaderboards, personalized challenges, rewards,
              and more to help you stay on top of your fitness and goals.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* FAQ 2 */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">
              Are there any rewards for completing challenges?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, you can earn rewards and badges for completing challenges,
              achieving milestones, and reaching your fitness goals.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* FAQ 3 */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography variant="h6">
              How can I customize my profile?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can personalize your profile by adding avatars, setting
              fitness goals, and selecting preferences to suit your needs.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* FAQ 4 */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography variant="h6">
              Do you provide customer support?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, we offer 24/7 customer support to help you with any questions
              or issues you may have. Reach out via our in-app support system.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* FAQ 5 */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography variant="h6">
              Can I receive notifications about my activities?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, you can enable push notifications to receive real-time
              updates about your progress, challenges, and milestones.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* FAQ 6 */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6a-content"
            id="panel6a-header"
          >
            <Typography variant="h6">
              How can I compete on the leaderboards?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can compete on our global leaderboards by participating in
              challenges and tracking your achievements against other users.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
}
