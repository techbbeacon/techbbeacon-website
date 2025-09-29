"use client";

import { Box, Container, Typography, Paper, Grid } from "@mui/material"; // ✅ classic Grid
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="flex-start">
          {/* LEFT SIDE */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Typography variant="h3" fontWeight={700}>
                About <span style={{ color: "#0871da" }}>Techbbeacon</span>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                fontSize={18}
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4, maxWidth: 650 }}
              >
                We are a dynamic IT startup helping startups and enterprises with
                complete digital transformation. From ideation to deployment, we
                provide end-to-end technology solutions that drive business growth.
                <br /><br />
                Our expert team specializes in creating modern websites, mobile
                applications, and custom software solutions that are scalable,
                secure, and user-friendly. We believe in transparent communication
                and delivering projects on time, every time.
              </Typography>
            </motion.div>

            <Grid container spacing={4}>
              <Grid item xs={12} sm={4} textAlign="center">
                <TrackChangesOutlinedIcon sx={{ fontSize: 40, color: "#0871da" }} />
                <Typography variant="h6" fontWeight={600}>Mission-Driven</Typography>
                <Typography color="text.secondary" fontSize="0.8rem">
                  Empowering businesses through innovative technology solutions
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4} textAlign="center">
                <EmojiPeopleOutlinedIcon sx={{ fontSize: 40, color: "#0871da" }} />
                <Typography variant="h6" fontWeight={600}>Client-Centric</Typography>
                <Typography color="text.secondary" fontSize="0.8rem">
                  Your success is our priority, always putting clients first
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4} textAlign="center">
                <LightbulbOutlinedIcon sx={{ fontSize: 40, color: "#0871da" }} />
                <Typography variant="h6" fontWeight={600}>Innovation First</Typography>
                <Typography color="text.secondary" fontSize="0.8rem">
                  Staying ahead with cutting-edge technologies & methodologies
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Paper
                sx={{
                  p: 4,
                  borderRadius: "12px",
                  backgroundColor: "#f9fbfd",
                  border: "1px solid rgba(0, 0, 0, 0.2)",
                }}
              >
                <Typography variant="h4" fontWeight={700} gutterBottom>
                  What Makes Us <span style={{ color: "#07bddf" }}>Different?</span>
                </Typography>

                {[
                  "5+ years of industry experience with proven results",
                  "Expert team of certified developers and consultants",
                  "Agile development methodology for faster delivery",
                  "Complete transparency in pricing and project progress",
                  "24/7 support and maintenance services included",
                  "Latest technology stack and industry best practices",
                ].map((point, i) => (
                  <Typography key={i} variant="body1" sx={{ mb: 1 }}>
                    ✓ {point}
                  </Typography>
                ))}
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        {/* Bottom Stats */}
        <Grid container spacing={6} justifyContent="center" textAlign="center" mt={8}>
          {[
            { value: "5+", label: "Years Experience", color: "#056bd1" },
            { value: "75+", label: "Projects Delivered", color: "#06c3e0" },
            { value: "45+", label: "Happy Clients", color: "#056bd1" },
            { value: "100%", label: "Client Satisfaction", color: "#06c3e0" },
          ].map((stat, i) => (
            <Grid item xs={6} sm={3} key={i}>
              <Typography variant="h4" fontWeight="bold" color={stat.color}>
                {stat.value}
              </Typography>
              <Typography color="text.secondary">{stat.label}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
