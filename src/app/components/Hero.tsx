"use client";

import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #1072d4, #07bddf)",
        color: "white",
        py: { xs: 6, md: 10 },
        textAlign: "center",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" } }}
          >
            Techbbeacon
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "2rem", sm: "2.8rem", md: "3.5rem" },
              mt: 1,
            }}
          >
            Your Digital Growth Partner
          </Typography>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
              mt: 2,
              mb: { xs: 3, md: 4 },
              px: { xs: 2, md: 0 },
            }}
          >
            We build websites, mobile apps, and custom software to help your business grow.
          </Typography>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Box display="flex" justifyContent="center" alignItems="center" gap={2} flexWrap="wrap">
            <Button
              component="a"        // ✅ plain anchor, not Next.js Link
              href="#contact"      // ✅ scroll to section
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #0871da, #0cc6e9)",
                borderRadius: "40px",
                px: { xs: 2, md: 3 },
                py: { xs: 0.8, md: 1 },
                fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  opacity: 0.95,
                  transform: "translateY(-3px)",
                  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              Get a Free Quote →
            </Button>
          </Box>
        </motion.div>

        {/* Stats */}
        <Grid container spacing={7} justifyContent="center" mt={{ xs: 4, md: 6 }}>
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" },
          ].map((item, index) => (
            <Grid item key={index} xs={12} sm={3} textAlign="center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
              >
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{ color: "#42d9f0", fontSize: { xs: "1.5rem", md: "2rem" } }}
                >
                  {item.value}
                </Typography>
                <Typography fontSize={{ xs: "0.9rem", md: "1rem" }}>
                  {item.label}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Scroll Mouse Icon */}
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div className="mouse"></div>
      </Box>
    </Box>
  );
};

export default HeroSection;
