import { Box, Grid, Typography } from "@mui/material";
import ctabg1e8b3216 from "../assets/img/ctabg1e8b3216.jpg";
import Button from "@mui/material/Button";
import footepayment from "../assets/img/footepayment.webp";
function Footer() {
  return (
    <footer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
          mb: 5,
        }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={12} position="relative">
            <img
              src={ctabg1e8b3216}
              alt="Apple iPhone 12 Pro"
              style={{
                width: "100%",
                height: "300px",
                overflow: "hidden",
                transition: "transform 0.3s ease-in-out",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "20%",
                left: "6%",
                width: "1296px",
                height: "200px",
                backgroundColor: "#fff", // White overlay with 80% opacity

                zIndex: 1,
              }}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={6} sm={6} position="relative">
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      transform: "translateY(60%)",
                      marginLeft: "20%",
                      fontWeight: "bold",
                      fontSize: "34px",
                      lineHeight: "1.1",
                      fontFamily: "Roboto, sans-serif",
                    }}>
                    Subscribe for
                    <br />
                    Latest Trends & Offers
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} position="relative">
                  <input
                    style={{
                      transform: "translateY(70%)",
                      width: "70%",
                      height: "64px",
                      border: "1px solid #03041c",
                      fontSize: "16px",

                      paddingRight: "170px",
                    }}
                    type="text"
                    placeholder="Enter your email"
                  />
                  <Button
                    style={{
                      bottom: "42%",

                      left: "60%",
                      fontWeight: "bold",
                      fontFamily: "Roboto, sans-serif",
                      padding: "10px 42px",
                      transform: "translateY(70%)",
                      width: "30%",
                      height: "54px",
                      backgroundColor: "#03041c",
                      color: "#fff",
                      fontSize: "16px",
                      border: "none",
                      cursor: "pointer",
                    }}>
                    Subscribe
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
          mb: 5,
          color: "#fff",
          padding: "20px",
          textAlign: "center",
        }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <img
                  style={{ marginRight: "30%" }}
                  src="https://hamart-shop.vercel.app/_next/static/media/logo-black.de19b08e.svg"
                />
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    color: "#525258",
                    fontSize: "16px",
                    lineHeight: "1.38",

                    textAlign: "left",
                    marginLeft: "1.2em", // For indentation
                    "&:first-letter": {
                      marginLeft: "-0em", // Adjust the first line
                    },
                  }}>
                  The home and elements needed to create beautiful products.
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    marginLeft: "7%",
                    color: "#03041c",
                    fontSize: "20px",
                    lineHeight: "1px",
                    fontWeight: "bold",
                    fontFamily: "Roboto, sans-serif",
                    marginBottom: "36px",
                    paddingTop: "3px",
                  }}>
                  Company
                </Typography>
                <ul
                  style={{
                    listStyleType: "none",
                    paddingLeft: "0",
                    marginLeft: "7%",
                    fontSize: "15px",
                    color: "#525258",
                    fontFamily: "Roboto, sans-serif",
                    lineHeight: "27px",
                  }}>
                  <li>Home</li>
                  <li>Shop</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    marginLeft: "7%",
                    color: "#03041c",
                    fontSize: "20px",
                    lineHeight: "1px",
                    fontWeight: "bold",
                    fontFamily: "Roboto, sans-serif",
                    marginBottom: "36px",
                    paddingTop: "3px",
                  }}>
                  Shop
                </Typography>
                <ul
                  style={{
                    listStyleType: "none",
                    paddingLeft: "0",
                    marginLeft: "7%",
                    fontSize: "15px",
                    color: "#525258",
                    fontFamily: "Roboto, sans-serif",
                    lineHeight: "27px",
                  }}>
                  <li>Game & Video</li>
                  <li>Phone &Tablets</li>
                  <li>Computers & Laptop</li>
                  <li>Sport Watches</li>
                </ul>
              </Grid>

              <Grid item xs={2}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    marginLeft: "7%",
                    color: "#03041c",
                    fontSize: "20px",
                    lineHeight: "1px",
                    fontWeight: "bold",
                    fontFamily: "Roboto, sans-serif",
                    marginBottom: "36px",
                    paddingTop: "3px",
                  }}>
                  Support
                </Typography>
                <ul
                  style={{
                    listStyleType: "none",
                    paddingLeft: "0",
                    marginLeft: "7%",
                    fontSize: "15px",
                    color: "#525258",
                    fontFamily: "Roboto, sans-serif",
                    lineHeight: "27px",
                  }}>
                  <li>FAQs</li>
                  <li>Reviews</li>
                  <li>Contact Us</li>
                  <li>Shipping</li>
                </ul>
              </Grid>

              <Grid item xs={3}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    marginLeft: "7%",
                    color: "#03041c",
                    fontSize: "20px",
                    lineHeight: "1px",
                    fontWeight: "bold",
                    fontFamily: "Roboto, sans-serif",
                    marginBottom: "36px",
                    paddingTop: "3px",
                  }}>
                  Talk To Us
                </Typography>
                <ul
                  style={{
                    listStyleType: "none",
                    paddingLeft: "0",
                    marginLeft: "7%",
                    fontSize: "15px",
                    color: "#525258",
                    fontFamily: "Roboto, sans-serif",
                    lineHeight: "27px",
                  }}>
                  <li>Find a location nearest you. See Our Stores</li>
                  <li>+624 423 26 72v</li>

                  <li>support@harry.comv</li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          borderTop: "1px solid #525258",
          paddingTop: "20px",
          paddingBottom: "40px",
        }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                color: "#525258",
                fontSize: "16px",
                lineHeight: "1.38",
                textAlign: "center",
                marginLeft: "1.2em", // For indentation
                "&:first-letter": {
                  marginLeft: "-0em", // Adjust the first line
                },
              }}>
              Copyright © 2024 by{" "}
              <span
                style={{
                  color: "#f50963",
                }}>
                Hamart
              </span>{" "}
              All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <img src={footepayment} />
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
}

export default Footer;
