import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { motion } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { sectionVariants } from "./animations";

const FAQ = () => {
  const [faqExpanded, setFaqExpanded] = useState(false);

  const faqTabs = ["Center Registration", "LAWMIS Portal", "GENERAL"];

  const faqData = [
    {
      question: "What is the purpose of this licensing scheme?",
      answer:
        "The Punjab Provincial Transport Authority (PTA), under the Transport & Masstransit Department, is inviting applications from eligible individuals and entities to establish and operate Vehicle Emission Testing Centers (VETCs). The scheme aims to regulate vehicular emissions, improve air quality, and introduce a standardized Vehicle Inspection & Certification (VICS) regime in Punjab.",
    },
    {
      question: "Who can apply for a license?",
      answer:
        "Eligible applicants include: Individuals, Registered firms / companies or partnerships incorporated in Pakistan, and Joint Ventures (JVs) between locally registered entities.",
    },
    {
      question: "How do I submit my application?",
      answer:
        "All applications must be submitted online through the designated application portal. Submissions through email, courier, or in person will not be accepted.",
    },
    {
      question: "What documents are required at the time of application?",
      answer:
        "Applicants must provide documents in line with the checklist provided in the licensing document, including: CNIC (for individuals) or Incorporation/Registration documents (for firms/companies/JVs), Valid NTN (and PRA registration, where applicable), Proof of ownership/lease of premises (minimum 500 sq.ft), Undertaking on legal stamp paper confirming compliance with requirements, Details of emission testing equipment to be deployed, IT equipment details (computer, printer, internet connectivity), Evidence of trained personnel availability or commitment, and JV Agreement/MOU (if applicable).",
    },
    {
      question: "What technical equipment is required?",
      answer:
        "Each VETC must be equipped with: Five-Gas Analyzer (for petrol vehicles), Diesel Opacimeter (for diesel vehicles), IT equipment (minimum Core i5 computer, printer, stable internet), Mandatory Software Development Kit (SDK) to connect with PTA's central server, CCTV coverage and backup power supply.",
    },
    {
      question: "Is there a minimum site requirement?",
      answer:
        "Yes. The proposed premises must be at least 500 sq.ft and legally owned, leased, or rented by the applicant.",
    },
    {
      question: "What is the tentative emission testing fee?",
      answer:
        "The following fees (subject to revision by PTA) will apply: Motorcars up to 1,000 cc: PKR 800, Motorcars above 1,000 cc: PKR 1,000, Diesel vehicles: PKR 1,000.",
    },
    {
      question: "How will applications be evaluated?",
      answer:
        "Applications will be assessed based on the Basic Eligibility Criteria outlined in the licensing document. Only those meeting the criteria will be declared 'Responsive Applicants' and considered for licensing.",
    },
    {
      question: "What happens in case of non-compliance?",
      answer:
        "Non-compliance with KPIs may result in fines. Two consecutive violations will lead to suspension of the license. If violations are not rectified within 2 months, the license will be revoked.",
    },
    {
      question: "How can I attend the clarification meeting?",
      answer:
        "Details of the clarification meeting (date, time, venue, Zoom link) will be published on the PTA website. Applicants are encouraged to attend to seek clarifications before submitting applications.",
    },
    {
      question: "Who can I contact for further assistance?",
      answer:
        "You may contact: Secretary, Punjab Provincial Transport Authority (PTA), Office No. 91, Shadman – II, Lahore, Pakistan, Phone: +92-42-99200359, Email: secpunjabpta@gmail.com, Website: https://transport.punjab.gov.pk",
    },
  ];

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Box
        className="faq-section"
        sx={{ bgcolor: "#fff", py: { xs: 2, md: 4 }, textAlign: "center" }}
      >
        <Typography
          className="section-title"
          variant="h5"
          fontWeight={700}
          color="secondary.main"
          mb={2}
          letterSpacing={0.5}
        >
          FAQs
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={1}
          justifyContent="center"
          mb={2}
        >
          {faqTabs.map((tab, index) => (
            <Button
              key={tab}
              className="faq-tab"
              variant={index === 0 ? "contained" : "outlined"}
              sx={{
                borderRadius: "3px 3px 0 0",
                fontWeight: 600,
                fontSize: 15,
                bgcolor: index === 0 ? "#14AE5C" : "transparent",
                color: index === 0 ? "#fff" : "#14AE5C",
                borderColor: "#14AE5C",
                "&:hover": {
                  bgcolor: "#14AE5C",
                  color: "#fff",
                  borderColor: "#14AE5C",
                },
              }}
            >
              {tab}
            </Button>
          ))}
        </Stack>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ maxWidth: 900, mx: "auto", textAlign: "left" }}
        >
          {faqData.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{ marginBottom: "16px" }}
            >
              <Accordion
                expanded={faqExpanded === i}
                onChange={() => setFaqExpanded(faqExpanded === i ? false : i)}
                TransitionProps={{ unmountOnExit: true }}
                sx={{
                  border: "none",
                  borderRadius: "12px !important",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#fff",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 8px 24px rgba(20, 174, 92, 0.15)",
                    transform: "translateY(-2px)",
                  },
                  "&:before": {
                    display: "none",
                  },
                  "&.Mui-expanded": {
                    margin: "0 0 16px 0",
                    borderLeft: "4px solid #14AE5C",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <motion.div
                      animate={{ rotate: faqExpanded === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExpandMoreIcon
                        sx={{
                          color: faqExpanded === i ? "#14AE5C" : "#666",
                          fontSize: "24px",
                        }}
                      />
                    </motion.div>
                  }
                  aria-controls={`faq-content-${i}`}
                  id={`faq-header-${i}`}
                  sx={{
                    backgroundColor: faqExpanded === i ? "#f8fffe" : "#fff",
                    borderRadius: faqExpanded === i ? "12px 12px 0 0" : "12px",
                    padding: "16px 20px",
                    minHeight: "72px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#f8fffe",
                    },
                    "& .MuiAccordionSummary-content": {
                      margin: "12px 0",
                    },
                  }}
                >
                  <Typography
                    className="faq-question"
                    fontWeight={600}
                    color={faqExpanded === i ? "#14AE5C" : "#333"}
                    sx={{
                      fontSize: { xs: "15px", md: "16px" },
                      mb: 0,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {i + 1}. {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    padding: "0 20px 20px 20px",
                    backgroundColor: "#f8fffe",
                    borderRadius: "0 0 12px 12px",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <Typography
                      className="faq-answer"
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: "14px", md: "15px" },
                        lineHeight: 1.7,
                        paddingLeft: "24px",
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </motion.div>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Container>
      </Box>
    </motion.div>
  );
};

export default FAQ;
