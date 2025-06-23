import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Box, Container, Grid, Typography, Button, Paper, Card, Stack, IconButton, useTheme, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from "framer-motion";
import heroBg from "./assets/hero-slider-bg.jpg";
import heroBg2 from "./assets/hero-slider-bg2.jpg";
import lawmisLogo from "./assets/lawmis logo.png";
import pptaLogo from "./assets/PPTA-logo-landing.png";
import punjabLogo from "./assets/punjab-logo-landing.png";
import transportLogo from "./assets/transport-logo-landing.png";
import nespakLogo from "./assets/nespak.png";
import galleryImg1 from "./assets/gallery-img1.jpg";
import galleryImg2 from "./assets/gallery-img2.jpg";
import galleryImg3 from "./assets/gallery-img3.jpg";
import galleryImg4 from "./assets/gallery-img4.jpg";
import galleryImg5 from "./assets/gallery-img5.jpg";
import galleryImg6 from "./assets/gallery-img6.jpg";
import galleryImg7 from "./assets/gallery-img7.jpg";
import galleryImg8 from "./assets/gallery-img8.jpg";
import partnerIcon1 from "./assets/partner-icon1.jpg";
import partnerIcon2 from "./assets/partner-icon2.jpg";
import partnerIcon3 from "./assets/partner-icon3.jpg";
import partnerIcon4 from "./assets/partner-icon4.jpg";

const heroImages = [heroBg, heroBg2];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
};

const cardHover = {
  whileHover: { scale: 1.04, boxShadow: "0 8px 32px rgba(26,62,123,0.13)" },
  transition: { type: "spring", stiffness: 300 }
};

const btnHover = {
  whileHover: { scale: 1.06, boxShadow: "0 4px 16px #1a8ed1aa" },
  transition: { type: "spring", stiffness: 300 }
};

const imgHover = {
  whileHover: { scale: 1.08 },
  transition: { type: "spring", stiffness: 300 }
};

const dotAnim = (active) => ({
  animate: { scale: active ? 1.2 : 1, background: active ? "#1a8ed1" : "rgba(255,255,255,0.5)" },
  transition: { type: "spring", stiffness: 300 }
});

const HomePage = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const [faqExpanded, setFaqExpanded] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => setHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  const goToNext = () => setHeroIndex((prev) => (prev + 1) % heroImages.length);

  return (
    <Box className="homepage" sx={{ width: '100vw', bgcolor: 'background.default', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Top Bar */}
      <Box sx={{ width: '100%', bgcolor: 'secondary.main', color: '#fff', textAlign: 'center', fontSize: 13, py: 0.5, letterSpacing: 0.5 }}>
        TRANSPORT AND MASS TRANSIT DEPARTMENT, GOVT. OF THE PUNJAB
      </Box>

      {/* Header & Navbar */}
      <AppBar position="static" elevation={0} sx={{ bgcolor: '#fff', color: 'secondary.main', boxShadow: 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 1, md: 5 } }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box component="img" src={lawmisLogo} alt="LAWMIS Logo" sx={{ height: 64 }} />
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
            {['ABOUT', 'BECOME A VENDOR', 'STATION REGISTRATION', 'PARTNER WORKSHOPS'].map((label, i) => (
              <motion.div key={label} {...btnHover} style={{ display: 'inline-block' }}>
                <Button color="inherit" sx={{ fontWeight: 600 }}>{label}</Button>
              </motion.div>
            ))}
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Box component="img" src={pptaLogo} alt="PPTA Logo" sx={{ height: 38 }} />
            <Box component="img" src={transportLogo} alt="Transport Logo" sx={{ height: 38 }} />
            <Box component="img" src={punjabLogo} alt="Punjab Logo" sx={{ height: 38 }} />
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box className="hero-section" sx={{ position: 'relative', height: { xs: 180, md: 320 }, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', overflow: 'hidden' }}>
        <Box className="hero-slider-container" sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', overflow: 'hidden' }}>
          {heroImages.map((img, idx) => (
            <Box
              key={idx}
              component={motion.img}
              className="hero-bg"
              src={img}
              alt="Workshop Hero"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0,
                filter: 'brightness(0.7)',
                zIndex: idx === heroIndex ? 2 : 1,
                transform: `translateX(${100 * (idx - heroIndex)}%)`,
                transition: 'transform 1s cubic-bezier(.4,0,.2,1)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            />
          ))}
          <IconButton className="hero-arrow hero-arrow-left" onClick={goToPrev} aria-label="Previous Slide" sx={{ position: 'absolute', top: '50%', left: 24, transform: 'translateY(-50%)', zIndex: 4, bgcolor: 'rgba(0,0,0,0.35)', color: '#fff', '&:hover': { bgcolor: 'primary.main' } }}>
            <MenuIcon sx={{ transform: 'rotate(180deg)' }} />
          </IconButton>
          <IconButton className="hero-arrow hero-arrow-right" onClick={goToNext} aria-label="Next Slide" sx={{ position: 'absolute', top: '50%', right: 24, transform: 'translateY(-50%)', zIndex: 4, bgcolor: 'rgba(0,0,0,0.35)', color: '#fff', '&:hover': { bgcolor: 'primary.main' } }}>
            <MenuIcon />
          </IconButton>
        </Box>
        {heroIndex === 0 && (
          <motion.div className="hero-overlay" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ position: 'relative', zIndex: 3 }}>
            <Typography variant="h3" fontWeight={700} mb={1} sx={{ fontSize: { xs: '1.1rem', md: '2.2rem' } }}>Licensed Automobile Workshop</Typography>
            <Typography variant="body1" fontWeight={400} letterSpacing={0.5}>
              FRAMEWORK FOR GRANT OF LICENSE TO AUTOMOBILE WORKSHOPS<br />FOR CONDUCTING VEHICLE INSPECTION AND FITNESS CERTIFICATION FOR MOTOR CARS
            </Typography>
          </motion.div>
        )}
        <Box className="hero-slider-dots" sx={{ position: 'absolute', left: 0, right: 0, bottom: { xs: 8, md: 18 }, display: 'flex', justifyContent: 'center', gap: { xs: 1, md: 2 }, zIndex: 10 }}>
          {heroImages.map((_, idx) => (
            <motion.span
              key={idx}
              className={`hero-dot${heroIndex === idx ? ' active' : ''}`}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: heroIndex === idx ? 14 : 12,
                height: heroIndex === idx ? 14 : 12,
                borderRadius: '50%',
                background: heroIndex === idx ? theme.palette.primary.main : 'rgba(255,255,255,0.5)',
                border: `2px solid ${theme.palette.primary.main}`,
                margin: 4,
                display: 'inline-block',
                boxShadow: heroIndex === idx ? `0 0 6px ${theme.palette.primary.main}aa` : 'none',
              }}
              animate={{ scale: heroIndex === idx ? 1.2 : 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          ))}
        </Box>
      </Box>

      {/* Register Strip Section */}
      <motion.div className="register-strip" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Typography className="register-strip-text" sx={{ color: '#fff', fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 600, letterSpacing: 0.5, textAlign: 'center', flex: 1, m: 0 }}>
          BECOME OUR VALUABLE PARTNERS AND REGISTER YOUR WORKSHOP FOR LAWMIS SERVICES
        </Typography>
        <motion.div {...btnHover} style={{ display: 'inline-block' }}>
          <Button className="register-strip-btn" variant="contained" sx={{ bgcolor: '#fff', color: '#222', fontWeight: 500, fontSize: { xs: '0.95rem', md: '1.08rem' }, borderRadius: 2, px: 4, py: 1.5, boxShadow: 1, '&:hover': { bgcolor: 'primary.dark', color: '#fff' } }}>
            REGISTER WORKSHOP
          </Button>
        </motion.div>
      </motion.div>

      {/* About Section */}
      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Container maxWidth={false} disableGutters sx={{ bgcolor: '#fff', py: { xs: 2, md: 5 }, boxShadow: 1 }}>
          <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ maxWidth: 1200, mx: 'auto' }}>
            <Grid item xs={12} md={7}>
              <Stack spacing={2}>
                <Button href="#" sx={{ color: 'primary.main', fontSize: 13, fontWeight: 600, alignSelf: 'flex-start' }}>
                  DOWNLOAD FRAMEWORK FOR SUBMISSION OF LICENSE APPLICATION <span role="img" aria-label="download">📥</span>
                </Button>
                <Typography variant="h4" fontWeight={700} color="primary.main" sx={{ fontSize: { xs: '1.2rem', md: '1.6rem' } }}>ABOUT <Box component="span" sx={{ color: 'primary.main' }}>US</Box></Typography>
                <Typography variant="body2" color="text.primary" sx={{ fontSize: 14, lineHeight: 1.7 }}>
                  THE TRANSPORT & MASSTRANSIT DEPARTMENT IS LAUNCHING INITIATIVES TO ENHANCE ROAD SAFETY AND IMPROVE AIR QUALITY, INCLUDING A VEHICLE INSPECTION AND CERTIFICATION SYSTEM FOR PRIVATE MOTORCARS AND JEEPS (P-VICS). THIS INITIATIVE AIMS TO REDUCE VEHICULAR EMISSIONS, COMBAT SMOG, AND ENSURE ROAD SAFETY BY IMPLEMENTING STRINGENT INSPECTION PROTOCOLS TO COMPLY WITH EMISSION STANDARDS AND OTHER SAFETY ISSUES. LICENSED AUTOMOBILE WORKSHOPS WILL CONDUCT THESE INSPECTIONS USING THE LICENSED AUTOMOBILE WORKSHOPS MANAGEMENT INFORMATION SYSTEM (LAWMIS), DEVELOPED BY THE PUNJAB INFORMATION TECHNOLOGY BOARD (PITB). VEHICLE OWNERS WILL REGISTER AND SCHEDULE INSPECTIONS ONLINE, WHILE WORKSHOP OWNERS WILL APPLY FOR LICENSES AND ADHERE TO QUALITY STANDARDS. EXPECTED OUTCOMES INCLUDE IMPROVED AIR QUALITY, INCREASED ROAD SAFETY, AND MORE EFFICIENT SERVICE DELIVERY.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box component={motion.img} src="https://i.ibb.co/6wQkQ7d/workshop-bg.jpg" alt="Workshop" sx={{ width: '100%', maxWidth: 320, borderRadius: 2, boxShadow: 2, mx: 'auto', display: 'block' }} {...imgHover} />
            </Grid>
          </Grid>
        </Container>
      </motion.div>

      {/* Services Section */}
      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Box className="services-section" sx={{ bgcolor: 'background.default', py: { xs: 2, md: 4 }, textAlign: 'center' }}>
          <Typography className="section-title" variant="h5" fontWeight={700} color="secondary.main" mb={2} letterSpacing={0.5}>
            OUR SERVICES
          </Typography>
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 1, maxWidth: 1200, mx: 'auto' }}>
            <Grid item xs={12} md={6}>
              <motion.div {...cardHover} style={{ height: '100%' }}>
                <Paper elevation={2} sx={{ p: 4, borderRadius: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 120, height: '100%' }}>
                  <Typography variant="h3" sx={{ fontSize: '2.2rem', mb: 1, color: 'primary.main' }}>📋</Typography>
                  <Typography fontWeight={600} color="secondary.main" sx={{ fontSize: '1.1rem' }}>AUTOMOBILE WORKSHOP REGISTRATION</Typography>
                </Paper>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div {...cardHover} style={{ height: '100%' }}>
                <Paper elevation={2} sx={{ p: 4, borderRadius: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 120, height: '100%' }}>
                  <Typography variant="h3" sx={{ fontSize: '2.2rem', mb: 1, color: 'primary.main' }}>📅</Typography>
                  <Typography fontWeight={600} color="secondary.main" sx={{ fontSize: '1.1rem' }}>BOOK AN APPOINTMENT FOR VEHICLE FITNESS CERTIFICATE</Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </motion.div>

      {/* Gallery Section */}
      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Box className="gallery-section" sx={{ bgcolor: '#fff', py: { xs: 2, md: 4 }, textAlign: 'center' }}>
          <Typography className="section-title" variant="h5" fontWeight={700} color="secondary.main" mb={2} letterSpacing={0.5}>
            GALLERY
          </Typography>
          <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: 1100, mx: 'auto' }}>
            {[galleryImg1, galleryImg3, galleryImg2, galleryImg5, galleryImg4, galleryImg6, galleryImg8, galleryImg7].map((img, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <motion.div {...cardHover} style={{ height: '100%' }}>
                  <Paper elevation={2} sx={{ borderRadius: 1, overflow: 'hidden' }}>
                    <Box component={motion.img} src={img} alt={`Gallery ${i+1}`} sx={{ width: '100%', height: 140, objectFit: 'cover', display: 'block' }} {...imgHover} />
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>

      {/* Stats Section */}
      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Box className="stats-section" sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'secondary.main', color: '#fff', py: { xs: 2, md: 4 }, gap: { xs: 2, md: 8 } }}>
          {[{label: 'TOTAL VISITORS', value: 3176}, {label: 'LICENSED WORKSHOPS', value: 0}, {label: 'VEHICLES INSPECTED', value: 0}, {label: 'CERTIFICATES ISSUED', value: 0}].map((stat, i) => (
            <motion.div key={stat.label} whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }} style={{ flex: 1, textAlign: 'center', minWidth: 160 }}>
              <Typography className="stat-number" variant="h4" fontWeight={700} mb={0.5}>{stat.value}</Typography>
              <Typography className="stat-label" fontWeight={500} letterSpacing={0.5}>{stat.label}</Typography>
            </motion.div>
          ))}
        </Box>
      </motion.div>

      {/* Licensed Workshops Section */}
      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Box className="workshops-section" sx={{ bgcolor: '#fff', py: { xs: 3, md: 6 }, textAlign: 'center', width: '100vw', maxWidth: '100vw', m: 0 }}>
          <Typography className="section-title" variant="h5" fontWeight={700} color="secondary.main" mb={2} letterSpacing={0.5}>
            LICENSED WORKSHOPS
          </Typography>
          <Box component="select" className="district-select" sx={{ my: 2, px: 2, py: 1, fontSize: 15, borderRadius: 1, border: '1px solid #d1d5db', color: 'secondary.main', fontWeight: 600 }}>
            <option>Select District</option>
          </Box>
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 2, width: '100vw', maxWidth: '100vw', mx: 0 }}>
            {[{img: partnerIcon1, title: 'GHAZANFAR INSPECTION CENTER'}, {img: partnerIcon2, title: 'LAHORE INSPECTION AND FITNESS CENTER'}, {img: partnerIcon3, title: 'PAK SUZUKI AND FITNESS CENTER'}, {img: partnerIcon4, title: 'TOYOTA RAVI MOTORS INSPECTION CENTER'}].map((w, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <motion.div {...cardHover} style={{ height: '100%' }}>
                  <Card elevation={2} sx={{ borderRadius: 2, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: '#fff', minHeight: 220 }}>
                    <Box component={motion.img} src={w.img} alt={w.title} sx={{ width: '100%', height: 140, objectFit: 'contain', mb: 2, borderRadius: 1, bgcolor: '#fff' }} {...imgHover} />
                    <Typography className="workshop-title" fontWeight={600} color="secondary.main" sx={{ fontSize: '1rem', mt: 1 }}>{w.title}</Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>

      {/* FAQ Section */}
      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Box className="faq-section" sx={{ bgcolor: '#fff', py: { xs: 2, md: 4 }, textAlign: 'center' }}>
          <Typography className="section-title" variant="h5" fontWeight={700} color="secondary.main" mb={2} letterSpacing={0.5}>
            FAQs
          </Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} justifyContent="center" mb={2}>
            <Button className="faq-tab" variant="contained" color="secondary" sx={{ borderRadius: '3px 3px 0 0', fontWeight: 600, fontSize: 15 }}>Workshop Registration</Button>
            <Button className="faq-tab" variant="outlined" color="secondary" sx={{ borderRadius: '3px 3px 0 0', fontWeight: 600, fontSize: 15 }}>Vehicle Inspection</Button>
            <Button className="faq-tab" variant="outlined" color="secondary" sx={{ borderRadius: '3px 3px 0 0', fontWeight: 600, fontSize: 15 }}>LAWMIS Portal</Button>
            <Button className="faq-tab" variant="outlined" color="secondary" sx={{ borderRadius: '3px 3px 0 0', fontWeight: 600, fontSize: 15 }}>Payment</Button>
            <Button className="faq-tab" variant="outlined" color="secondary" sx={{ borderRadius: '3px 3px 0 0', fontWeight: 600, fontSize: 15 }}>GENERAL</Button>
          </Stack>
          <Container maxWidth={false} disableGutters sx={{ maxWidth: 900, mx: 'auto', textAlign: 'left' }}>
            {[...Array(9)].map((_, i) => (
              <Accordion key={i} expanded={faqExpanded === i} onChange={() => setFaqExpanded(faqExpanded === i ? false : i)} TransitionProps={{ unmountOnExit: true }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`faq-content-${i}`} id={`faq-header-${i}`}>
                  <Typography className="faq-question" fontWeight={600} color="secondary.main" sx={{ fontSize: 15, mb: 0.5 }}>{i+1}. What is vehicle inspection and certification system for private motor cars / Jeeps (LAWMIS)?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="faq-answer" color="text.primary" sx={{ fontSize: 14, ml: 1 }}>
                    The Vehicle Inspection and Certification system for Private Motor Cars/Jeeps include Licensed Automobile Workshops authorized by the Transport & Masstransit Department...
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Container>
        </Box>
      </motion.div>

      {/* Footer */}
      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Box className="footer" sx={{ bgcolor: 'secondary.main', color: '#fff', textAlign: 'center', py: 2, fontSize: 15, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
          <span>POWERED BY</span>
          <Box component="img" src={nespakLogo} alt="Nespak Logo" sx={{ width: 48, height: 48, mx: 2, verticalAlign: 'middle' }} />
          <span>PUNJAB INFORMATION TECHNOLOGY BOARD-PITB</span>
        </Box>
      </motion.div>
    </Box>
  );
};

export default HomePage; 