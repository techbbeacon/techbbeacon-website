"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 10, backgroundColor: "#f9fbfd" }}>
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" fontWeight={700} align="center" >
            Get In{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg,#0871da,#0cc6e9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Touch
            </Box>
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 700, mx: "auto" }}
          >
            Ready to transform your business with cutting-edge technology?
            Let’s discuss your project and create something amazing together.
          </Typography>
        </motion.div>

        {/* Top Info Cards */}
        <Grid container spacing={4} mb={6}>
          {[
            {
              icon: <EmailIcon fontSize="large" sx={{ color: "#0871da" }} />,
              title: "Email Us",
              value: (
                <Typography
                  component="a"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@techbbeacon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "inherit",
                    textDecoration: "none",
                    fontWeight: 500,
                    "&:hover": { color: "#0871da", textDecoration: "underline" },
                  }}
                >
                  hello@techbbeacon.com
                </Typography>
              ),
              subtitle: "We’ll respond within 24 hours",
            },
            {
              icon: <WhatsAppIcon fontSize="large" sx={{ color: "#06c3e0" }} />,
              title: "Quick Connect on WhatsApp",
              value: (
                <Button
                  // component="a"
                  // href="https://api.whatsapp.com/send?phone=918796889625&text=Hi%20Techbbeacon%20Team,%20I%20want%20to%20discuss%20a%20new%20project."
                  // target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    backgroundColor: "#25D366",
                    "&:hover": { backgroundColor: "#1ebe57" },
                    mt: 2,
                  }}
                >
                  Quick Connect on WhatsApp
                </Button>

              ),
              subtitle:
                " ----------- Get instant responses to your queries. Chat with our team directly on WhatsApp. ----------- ",
            },
            {
              icon: <LocationOnIcon fontSize="large" sx={{ color: "#0871da" }} />,
              title: "Visit Us",
              value: (
                <Typography
                  component="a"
                  href="https://www.google.com/maps/place/Pune,+Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "inherit",
                    textDecoration: "none",
                    fontWeight: 500,
                    "&:hover": { color: "#0871da", textDecoration: "underline" },
                  }}
                >
                  Pune, Maharashtra
                </Typography>
              ),
              subtitle: "IT Hub of India",
            },
          ].map((item, i) => (
            <Grid key={i}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 3,
                  height: "100%",
                  "&:hover": { boxShadow: 6, transform: "translateY(-4px)" },
                }}
              >
                <Box sx={{ mb: 2 }}>{item.icon}</Box>
                <Typography variant="h6" fontWeight={600}>
                  {item.title}
                </Typography>
                <Box sx={{ my: 1 }}>{item.value}</Box>
                <Typography variant="body2" color="text.secondary">
                  {item.subtitle}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Paper
            elevation={4}
            sx={{
              p: 6,
              borderRadius: 3,
              mx: "auto",
              mb: 6,
              bgcolor: "#fcfdfd",
              maxWidth: 600, // ✅ keeps form narrower like screenshot
            }}
          >
            {/* Heading */}
            <Typography
              variant="h5"
              fontWeight={700}
              align="center"
            >
              Start Your{" "}
              <Box component="span" sx={{ color: "#06c3e0" }}>
                Project
              </Box>
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="body1"
              color="text.secondary"
              align="center"
              sx={{ mb: 5 }}
            >
              Fill out the form below and we&apos;ll get back to you shortly
            </Typography>

            {/* Form */}
            <Grid container spacing={3}>
              <Grid >
                <TextField
                  label="Name"
                  fullWidth
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid >
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid >
                <TextField
                  label="Phone"
                  fullWidth
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid >
                <TextField
                  label="Company Name"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid >
                <TextField
                  label="Project Details"
                  multiline
                  rows={4}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid >
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  // endIcon={<SendIcon />} // ✅ adds paper plane icon
                  sx={{
                    py: 1.4,
                    borderRadius: 2,
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "1rem",
                    background: "linear-gradient(90deg,#0871da,#0cc6e9)",
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>

        {/* Bottom Row */}

      </Container>
    </Box>
  );
}
