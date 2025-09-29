"use client";

import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        {/* Top Row: About + Card */}
        <Grid container spacing={25} alignItems="flex-start">
          {/* LEFT SIDE */}
          <Grid >
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Typography variant="h3" fontWeight={700} >
                About <span style={{ color: "#0871da" }}>Techbbeacon</span>
              </Typography>
            </motion.div>

            {/* Paragraph */}
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
                We are a dynamic IT startup helping startups and enterprises with complete digital transformation. From ideation to deployment, we provide end-to-end technology solutions that drive business growth.
                <br /><br />
                Our expert team specializes in creating modern websites, mobile applications, and custom software solutions that are scalable, secure, and user-friendly. We believe in transparent communication and delivering projects on time, every time.            </Typography>
            </motion.div>
            {/* Features Row */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Grid container spacing={4} justifyContent="center">
                <Grid textAlign="center">
                  <TrackChangesOutlinedIcon sx={{ fontSize: 40, color: "#0871da" }} />
                  <Typography variant="h6" fontWeight={600}>
                    Mission-Driven
                  </Typography>
                  <Typography color="text.secondary" fontSize="0.7rem">
                    Empowering businesses through
                    <br></br>
                    innovative technology solutions
                  </Typography>
                </Grid>

                <Grid textAlign="center">
                  <EmojiPeopleOutlinedIcon sx={{ fontSize: 40, color: "#0871da" }} />
                  <Typography variant="h6" fontWeight={600}>
                    Client-Centric
                  </Typography>
                  <Typography color="text.secondary" fontSize="0.7rem">
                    Your success is our priority,
                    <br></br>
                    always putting clients first
                  </Typography>
                </Grid>

                <Grid textAlign="center">
                  <LightbulbOutlinedIcon sx={{ fontSize: 40, color: "#0871da" }} />
                  <Typography variant="h6" fontWeight={600}>
                    Innovation First
                  </Typography>
                  <Typography color="text.secondary" fontSize="0.7rem">
                    Staying ahead with cutting-edge
                    <br></br>
                    technologies and methodologies
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>

          {/* RIGHT SIDE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Grid >
              <Paper
                elevation={0}
                sx={{
                  p: 4, borderRadius: "12px", backgroundColor: "#f9fbfd", border: "1px solid rgba(0, 0, 0, 0.2)", marginTop: {
                    xs: "-10rem",  // small screens
                    sm: "-10rem",  // ≥600px
                    md: "-10rem",  // ≥900px
                    lg: "-34rem",  // ≥1200px
                  },
                  marginLeft: {
                    lg: "45rem"
                  }
                }}
              >
                <Typography variant="h4" fontWeight={700}>
                  What Makes Us <span style={{ color: "#07bddf" }}>Different?</span>
                </Typography>

                <Typography variant="body1" sx={{ mb: 1 }}>
                  ✓ 5+ years of industry experience with proven results
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  ✓ Expert team of certified developers and consultants
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  ✓ Agile development methodology for faster delivery
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  ✓ Complete transparency in pricing and project progress
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  ✓ 24/7 support and maintenance services included
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  ✓ Latest technology stack and industry best practices
                </Typography>
              </Paper>
            </Grid>
          </motion.div>
        </Grid>

        {/* Bottom Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Grid
            container
            spacing={11}
            justifyContent="center"
            textAlign="center"
            sx={{
              marginTop: {
                xs: "2rem",  // small screens
                sm: "2rem",  // ≥600px
                md: "2rem",  // ≥900px
                lg: "-10rem",  // ≥1200px
              },
            }}
          >
            <Grid >
              <Typography
                variant="h4"
                fontWeight="bold"
                color="#056bd1"

              >
                5+
              </Typography>
              <Typography color="text.secondary">Years Experience</Typography>
            </Grid>

            <Grid >
              <Typography
                variant="h4"
                fontWeight="bold"
                color="#06c3e0"

              >
                75+
              </Typography>
              <Typography color="text.secondary">Projects Delivered</Typography>
            </Grid>

            <Grid >
              <Typography
                variant="h4"
                fontWeight="bold"
                color="#056bd1"

              >
                45+
              </Typography>
              <Typography color="text.secondary">Happy Clients</Typography>
            </Grid>
            <Grid >
              <Typography
                variant="h4"
                fontWeight="bold"
                color="#06c3e0"

              >
                100%
              </Typography>
              <Typography color="text.secondary">Client Satisfaction</Typography>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box >
  );
}
