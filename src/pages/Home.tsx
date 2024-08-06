import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Grid } from "@mui/material";
import productcat from "../assets/img/productcat.webp";
import productcat3 from "../assets/img/productcat3.webp";
import productcat4 from "../assets/img/productcat4.webp";
import productcat6 from "../assets/img/productcat6.webp";
import productcat7 from "../assets/img/productcat7.webp";
import productcat1 from "../assets/img/productcat1.webp";
import { useState } from "react";
import { Typography } from "@mui/material";
import product2 from "../assets/img/product2.webp";
import product3 from "../assets/img/product3.webp";
import product1 from "../assets/img/product1.webp";
import product6 from "../assets/img/product6.webp";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { IoCart } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { FaGgCircle } from "react-icons/fa6";
import product7 from "../assets/img/product7.webp";
import product9 from "../assets/img/product9.webp";
import product5 from "../assets/img/product5.webp";
import product8 from "../assets/img/product8.webp";
import Button from "@mui/material/Button";
import banner1a1774ed4 from "../assets/img/banner1a1774ed4.jpg";
import slider from "../assets/img/slider.webp";
import { Stack } from "@mui/material";
import { Link } from "@mui/material";
function Home() {
  const [activeItem, setActiveItem] = useState<string>("Top Rated");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const handleClick = (item: string) => {
    setActiveItem(item);
  };
  useEffect(() => {
    Aos.init();
  }, []);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f0f2ee",
          paddingY: 8,
          borderBottom: "1px solid #6c757d",
          position: "relative",
          overflow: "hidden",
          width: "100%",
        }}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
          sx={{
            marginLeft: 10,
            width: "100%",
            overflow: "hidden",
          }}>
          <Grid item xs={6} sx={{ marginLeft: "10px", marginTop: "-10px" }}>
            <span className="slider__title-pre-13">
              Best Ear <br /> Headphones
            </span>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#03041c",
                fontSize: "80px",
                lineHeight: "1.05",
                letterSpacing: "-1px",
                marginBottom: "45px",
              }}>
              Music To <br /> Fill Your Heart
            </Typography>
            <Link
              href="/shop"
              sx={{
                display: "inline-block",
                textDecoration: "none",
                backgroundColor: "#dc3545",
                color: "#fff",
                padding: "10px 30px",
                borderRadius: "30px",
                fontWeight: "bold",
                fontSize: "20px",
                "&:hover": { backgroundColor: "#fff", color: "#dc3545" },
              }}>
              Shop Now
            </Link>
          </Grid>
          <Grid item xs={6} sx={{ transform: "translateX(-20px)" }}>
            <img
              src={slider}
              alt="slider"
              style={{ width: "460px", height: "525px" }}
            />
          </Grid>
        </Stack>
      </Box>

      <div style={{ paddingTop: "3%" }}>
        <Carousel responsive={responsive} itemClass="carousel-item">
          <div className="card">
            <img src={productcat} alt="placeholder" />
          </div>
          <div className="card">
            <img src={productcat3} alt="placeholder" />
          </div>
          <div className="card">
            <img src={productcat4} alt="placeholder" />
          </div>
          <div className="card">
            <img src={productcat6} alt="placeholder" />
          </div>
          <div className="card">
            <img src={productcat7} alt="placeholder" />
          </div>
          <div className="card">
            <img src={productcat1} alt="placeholder" />
          </div>
        </Carousel>
      </div>

      <Box
        sx={{
          marginTop: "5%",
          width: "99vw",
          borderTop: "1px solid #6c757d",
          overflowX: "hidden", // Hides the horizontal scrollbar
        }}>
        <Grid
          mt={5}
          container
          spacing={2}
          justifyContent={"space-between"}
          alignItems={"center"}>
          <Grid container spacing={5} alignItems="center" ml={10}>
            <Grid item xs={6}>
              <Grid container spacing={5} alignItems="center">
                <Grid item mt={2}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      position: "relative",
                      "&:after": {
                        content: '""',
                        position: "absolute",
                        top: "1px",
                        left: -7,
                        width: "1.75px",
                        height: "37px",
                        backgroundColor: "#f50963",
                        fontWeight: "bold",
                      },
                    }}>
                    Popular Products
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <Grid container spacing={5} ml={12}>
                <Grid item>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      position: "relative",
                      "&:hover": { color: "#f50963", cursor: "pointer" },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -2,
                        left: 0,
                        width: activeItem === "Top Rated" ? "100%" : "0",
                        height: "2px",
                        backgroundColor: "#f50963",
                        transition: "width 0.3s",
                      },
                    }}
                    onClick={() => handleClick("Top Rated")}>
                    Top Rated
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      position: "relative",
                      "&:hover": { color: "#f50963", cursor: "pointer" },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -2,
                        left: 0,
                        width: activeItem === "Best Selling" ? "100%" : "0",
                        height: "2px",
                        backgroundColor: "#f50963",
                        transition: "width 0.3s",
                      },
                    }}
                    onClick={() => handleClick("Best Selling")}>
                    Best Selling
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      position: "relative",
                      "&:hover": { color: "#f50963", cursor: "pointer" },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -2,
                        left: 0,
                        width: activeItem === "Latest Product" ? "100%" : "0",
                        height: "2px",
                        backgroundColor: "#f50963",
                        transition: "width 0.3s",
                      },
                    }}
                    onClick={() => handleClick("Latest Product")}>
                    Latest Product
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          width: "99vw",

          overflowX: "hidden", // Hides the horizontal scrollbar
        }}>
        <Grid
          mt={5}
          container
          spacing={2}
          justifyContent={"space-between"}
          alignItems={"center"}>
          <Grid container spacing={5} alignItems="center" ml={5}>
            <Grid item xs={12} mr={19}>
              <Grid container spacing={5} alignItems="center">
                <Grid item xs={12} sm={6} md={4} lg={3} mt={3}>
                  <Box
                    position="relative"
                    onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                      width: { xs: "100%", sm: "306px" }, // Full width on small screens, fixed width on larger
                      height: "359px",
                      overflow: "hidden",
                    }}>
                    <img
                      src={product2}
                      alt="Apple Watch Series 8"
                      style={{
                        width: "100%",
                        height: "100%",
                        transition: "transform 0.3s ease-in-out",
                        transform:
                          hoveredIndex === 0 ? "scale(1.1)" : "scale(1)",
                      }}
                    />
                    {hoveredIndex === 0 && (
                      <>
                        <Box
                          className="fade-up"
                          position="absolute"
                          bottom={0}
                          left={0}
                          right={0}
                          fontWeight={600}
                          fontSize={18}
                          bgcolor="#03041c"
                          color="white"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          height="50px"
                          sx={{
                            "&:hover": {
                              cursor: "pointer",
                              backgroundColor: "#f50963",
                            },
                          }}>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}>
                            <IoCart style={{ marginRight: "8px" }} /> Add to
                            Cart
                          </span>
                        </Box>

                        {/* Icons */}
                        <Box
                          className="fade-right"
                          position="absolute"
                          top="10%"
                          right="3%"
                          width="38px"
                          height="38px"
                          bgcolor="white"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },
                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 0 ? 1 : 0,
                          }}>
                          <MdFavoriteBorder style={{ fontSize: "20px" }} />
                          <span className="product-action-tooltip">
                            Add to Wishlist
                          </span>
                        </Box>

                        <Box
                          className="fade-right"
                          position="absolute"
                          top="23%"
                          right="3%"
                          width="38px"
                          height="38px"
                          bgcolor="white"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },
                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 0 ? 1 : 0,
                          }}>
                          <GrView style={{ fontSize: "18px" }} />
                          <span className="product-action-tooltip">
                            Quick View
                          </span>
                        </Box>

                        <Box
                          className="fade-right"
                          position="absolute"
                          top="36%"
                          right="3%"
                          width="38px"
                          height="38px"
                          bgcolor="white"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },
                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 0 ? 1 : 0,
                          }}>
                          <FaGgCircle style={{ fontSize: "18px" }} />
                          <span className="product-action-tooltip">
                            Product Details
                          </span>
                        </Box>
                      </>
                    )}
                  </Box>
                  <Typography
                    variant="h6"
                    mt={2}
                    ml={2}
                    sx={{
                      fontSize: { xs: "12px", sm: "14px" }, // Smaller font size on small screens
                      fontWeight: "bold",
                      color: "#525258",
                      fontFamily: "sans-serif",
                      "&:hover": { color: "#f50963", cursor: "pointer" },
                    }}>
                    Apple Watch Series 8
                  </Typography>
                  <Typography
                    variant="h6"
                    mt={1}
                    ml={2}
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#f50963",
                      fontFamily: "sans-serif",
                    }}>
                    $399.00
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3} mt={3}>
                  <Box
                    position="relative"
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                      width: "306px",
                      height: "359px",
                      overflow: "hidden",
                    }}>
                    <img
                      src={product3}
                      alt="TECLAST Tablet Protective Cover Case"
                      style={{
                        width: "100%",
                        height: "100%",
                        transition: "transform 0.3s ease-in-out",
                        transform:
                          hoveredIndex === 1 ? "scale(1.1)" : "scale(1)",
                      }}
                    />
                    {hoveredIndex === 1 && (
                      <>
                        <Box
                          className="fade-up"
                          position="absolute"
                          bottom={0}
                          left={0}
                          right={0}
                          fontWeight={600}
                          fontSize={18}
                          bgcolor="#03041c"
                          color="white"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          height="50px"
                          sx={{
                            "&:hover": {
                              cursor: "pointer",
                              backgroundColor: "#f50963",
                            },
                          }}>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}>
                            <IoCart style={{ marginRight: "8px" }} /> Add to
                            Cart
                          </span>
                        </Box>
                        <Box
                          className="fade-right"
                          position="absolute"
                          top="10%"
                          right="3%"
                          width="38px"
                          height="38px"
                          bgcolor="white"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },
                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 1 ? 1 : 0,
                          }}>
                          <MdFavoriteBorder
                            style={{
                              fontSize: "20px",
                            }}
                          />
                          <span className="product-action-tooltip">
                            Add to Wishlist
                          </span>
                        </Box>

                        <Box
                          className="fade-right"
                          position="absolute"
                          top="23%"
                          right="3%"
                          width="38px"
                          height="38px"
                          bgcolor="white"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },

                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 1 ? 1 : 0,
                          }}>
                          <GrView
                            style={{
                              fontSize: "18px",
                            }}
                          />
                          <span className="product-action-tooltip">
                            Quick View
                          </span>
                        </Box>

                        <Box
                          className="fade-right"
                          position="absolute"
                          top="36%"
                          right="3%"
                          width="38px"
                          height="38px"
                          bgcolor="white"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },

                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 1 ? 1 : 0,
                          }}>
                          <FaGgCircle
                            style={{
                              fontSize: "18px",
                            }}
                          />
                          <span className="product-action-tooltip">
                            Product Details
                          </span>
                        </Box>
                      </>
                    )}
                  </Box>
                  <Typography
                    variant="h6"
                    mt={2}
                    ml={2}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#525258",
                      fontFamily: "sans-serif",
                      "&:hover": { color: "#f50963", cursor: "pointer" },
                    }}>
                    TECLAST Tablet Protective Cover Case
                  </Typography>
                  <Typography
                    variant="h6"
                    mt={1}
                    ml={2}
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#f50963",
                      fontFamily: "sans-serif",
                    }}>
                    <span
                      style={{
                        textDecoration: "line-through",
                        marginRight: "8px",
                      }}>
                      $899.00
                    </span>
                    $791.12
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3} mt={3}>
                  <Box
                    position="relative"
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                      width: "306px",
                      height: "359px",
                      overflow: "hidden",
                    }}>
                    <img
                      src={product1}
                      alt="STANLEY STPP7502 750W 2mm Planer"
                      style={{
                        width: "100%",
                        height: "100%",
                        transition: "transform 0.3s ease-in-out",
                        transform:
                          hoveredIndex === 2 ? "scale(1.1)" : "scale(1)",
                      }}
                    />
                    {hoveredIndex === 2 && (
                      <>
                        <Box
                          className="fade-up"
                          position="absolute"
                          bottom={0}
                          left={0}
                          right={0}
                          fontWeight={600}
                          fontSize={18}
                          bgcolor="#03041c"
                          color="white"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          height="50px"
                          sx={{
                            "&:hover": {
                              cursor: "pointer",
                              backgroundColor: "#f50963",
                            },
                          }}>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}>
                            <IoCart style={{ marginRight: "8px" }} /> Add to
                            Cart
                          </span>
                        </Box>
                        <Box
                          className="fade-right"
                          position="absolute"
                          top="10%"
                          right="3%"
                          width="38px"
                          height="38px"
                          bgcolor="white"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },
                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 2 ? 1 : 0,
                          }}>
                          <MdFavoriteBorder
                            style={{
                              fontSize: "20px",
                            }}
                          />
                          <span className="product-action-tooltip">
                            Add to Wishlist
                          </span>
                        </Box>

                        <Box
                          className="fade-right"
                          position="absolute"
                          top="23%"
                          right="3%"
                          width="38px"
                          height="38px"
                          bgcolor="white"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },

                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 2 ? 1 : 0,
                          }}>
                          <GrView
                            style={{
                              fontSize: "18px",
                            }}
                          />
                          <span className="product-action-tooltip">
                            Quick View
                          </span>
                        </Box>

                        <Box
                          className="fade-right"
                          position="absolute"
                          top="36%"
                          right="3%"
                          width="38px"
                          height="38px"
                          bgcolor="white"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },

                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 2 ? 1 : 0,
                          }}>
                          <FaGgCircle
                            style={{
                              fontSize: "18px",
                            }}
                          />
                          <span className="product-action-tooltip">
                            Product Details
                          </span>
                        </Box>
                      </>
                    )}
                  </Box>
                  <Typography
                    variant="h6"
                    mt={2}
                    ml={2}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#525258",
                      fontFamily: "sans-serif",
                      "&:hover": { color: "#f50963", cursor: "pointer" },
                    }}>
                    Buy Guild Planer - 900w
                  </Typography>
                  <Typography
                    variant="h6"
                    mt={1}
                    ml={2}
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#f50963",
                      fontFamily: "sans-serif",
                    }}>
                    $239.00
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3} mt={3}>
                  <Box
                    position="relative"
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                      width: "306px",
                      height: "359px",
                      overflow: "hidden",
                    }}>
                    <img
                      src={product6}
                      alt="STANLEY STPP7502 750W 2mm Planer"
                      style={{
                        width: "100%",
                        height: "100%",
                        transition: "transform 0.3s ease-in-out",
                        transform:
                          hoveredIndex === 3 ? "scale(1.1)" : "scale(1)",
                      }}
                    />
                    {hoveredIndex === 3 && (
                      <>
                        <Box
                          className="fade-up"
                          position="absolute"
                          bottom={0}
                          left={0}
                          right={0}
                          fontWeight={600}
                          fontSize={18}
                          bgcolor="#03041c"
                          color="white"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          height="50px"
                          sx={{
                            "&:hover": {
                              cursor: "pointer",
                              backgroundColor: "#f50963",
                            },
                          }}>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}>
                            <IoCart style={{ marginRight: "8px" }} /> Add to
                            Cart
                          </span>
                        </Box>
                        <Box
                          className="fade-right"
                          position="absolute"
                          top="10%"
                          right="3%"
                          width="38px"
                          height="38px"
                          bgcolor="white"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },
                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 3 ? 1 : 0,
                          }}>
                          <MdFavoriteBorder
                            style={{
                              fontSize: "20px",
                            }}
                          />
                          <span className="product-action-tooltip">
                            Add to Wishlist
                          </span>
                        </Box>

                        <Box
                          className="fade-right"
                          position="absolute"
                          top="23%"
                          right="3%"
                          width="38px"
                          height="38px"
                          bgcolor="white"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },

                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 3 ? 1 : 0,
                          }}>
                          <GrView
                            style={{
                              fontSize: "18px",
                            }}
                          />
                          <span className="product-action-tooltip">
                            Quick View
                          </span>
                        </Box>

                        <Box
                          className="fade-right"
                          position="absolute"
                          top="36%"
                          right="3%"
                          width="38px"
                          height="38px"
                          bgcolor="white"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },

                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 3 ? 1 : 0,
                          }}>
                          <FaGgCircle
                            style={{
                              fontSize: "18px",
                            }}
                          />
                          <span className="product-action-tooltip">
                            Product Details
                          </span>
                        </Box>
                      </>
                    )}
                  </Box>
                  <Typography
                    variant="h6"
                    mt={2}
                    ml={2}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#525258",
                      fontFamily: "sans-serif",
                      "&:hover": { color: "#f50963", cursor: "pointer" },
                    }}>
                    ViewSonic Professional Monitor
                  </Typography>
                  <Typography
                    variant="h6"
                    mt={1}
                    ml={2}
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#f50963",
                      fontFamily: "sans-serif",
                    }}>
                    <span
                      style={{
                        textDecoration: "line-through",
                        marginRight: "8px",
                      }}>
                      $299.00
                    </span>
                    $281.06
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3} mt={3}>
                  <Box
                    position="relative"
                    onMouseEnter={() => handleMouseEnter(4)}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                      width: "306px",
                      height: "359px",
                      overflow: "hidden",
                    }}>
                    <img
                      src={product7}
                      alt="STANLEY STPP7502 750W 2mm Planer"
                      style={{
                        width: "100%",
                        height: "100%",
                        transition: "transform 0.3s ease-in-out",
                        transform:
                          hoveredIndex === 4 ? "scale(1.1)" : "scale(1)",
                      }}
                    />
                    {hoveredIndex === 4 && (
                      <>
                        <Box
                          className="fade-up"
                          position="absolute"
                          bottom={0}
                          left={0}
                          right={0}
                          fontWeight={600}
                          fontSize={18}
                          bgcolor="#03041c"
                          color="white"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          height="50px"
                          sx={{
                            "&:hover": {
                              cursor: "pointer",
                              backgroundColor: "#f50963",
                            },
                          }}>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}>
                            <IoCart style={{ marginRight: "8px" }} /> Add to
                            Cart
                          </span>
                        </Box>
                        <Box
                          className="fade-right"
                          position="absolute"
                          top="10%"
                          right="3%"
                          width="38px"
                          height="38px"
                          bgcolor="white"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },
                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 4 ? 1 : 0,
                          }}>
                          <MdFavoriteBorder
                            style={{
                              fontSize: "20px",
                            }}
                          />
                          <span className="product-action-tooltip">
                            Add to Wishlist
                          </span>
                        </Box>

                        <Box
                          className="fade-right"
                          position="absolute"
                          top="23%"
                          right="3%"
                          width="38px"
                          height="38px"
                          bgcolor="white"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },

                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 4 ? 1 : 0,
                          }}>
                          <GrView
                            style={{
                              fontSize: "18px",
                            }}
                          />
                          <span className="product-action-tooltip">
                            Quick View
                          </span>
                        </Box>

                        <Box
                          className="fade-right"
                          position="absolute"
                          top="36%"
                          right="3%"
                          width="38px"
                          height="38px"
                          bgcolor="white"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },

                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 4 ? 1 : 0,
                          }}>
                          <FaGgCircle
                            style={{
                              fontSize: "18px",
                            }}
                          />
                          <span className="product-action-tooltip">
                            Product Details
                          </span>
                        </Box>
                      </>
                    )}
                  </Box>
                  <Typography
                    variant="h6"
                    mt={2}
                    ml={2}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#525258",
                      fontFamily: "sans-serif",
                      "&:hover": { color: "#f50963", cursor: "pointer" },
                    }}>
                    Xiaomi Poco M4 pro 5G
                  </Typography>
                  <Typography
                    variant="h6"
                    mt={1}
                    ml={2}
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#f50963",
                      fontFamily: "sans-serif",
                    }}>
                    $67.00
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3} mt={3}>
                  <Box
                    position="relative"
                    onMouseEnter={() => handleMouseEnter(5)}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                      width: "306px",
                      height: "359px",
                      overflow: "hidden",
                    }}>
                    <img
                      src={product9}
                      alt="STANLEY STPP7502 750W 2mm Planer"
                      style={{
                        width: "100%",
                        height: "100%",
                        transition: "transform 0.3s ease-in-out",
                        transform:
                          hoveredIndex === 5 ? "scale(1.1)" : "scale(1)",
                      }}
                    />
                    {hoveredIndex === 5 && (
                      <>
                        <Box
                          className="fade-up"
                          position="absolute"
                          bottom={0}
                          left={0}
                          right={0}
                          fontWeight={600}
                          fontSize={18}
                          bgcolor="#03041c"
                          color="white"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          height="50px"
                          sx={{
                            "&:hover": {
                              cursor: "pointer",
                              backgroundColor: "#f50963",
                            },
                          }}>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}>
                            <IoCart style={{ marginRight: "8px" }} /> Add to
                            Cart
                          </span>
                        </Box>
                        <Box
                          className="fade-right"
                          position="absolute"
                          top="10%"
                          right="3%"
                          width="38px"
                          height="38px"
                          bgcolor="white"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },
                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 5 ? 1 : 0,
                          }}>
                          <MdFavoriteBorder
                            style={{
                              fontSize: "20px",
                            }}
                          />
                          <span className="product-action-tooltip">
                            Add to Wishlist
                          </span>
                        </Box>

                        <Box
                          className="fade-right"
                          position="absolute"
                          top="23%"
                          right="3%"
                          width="38px"
                          height="38px"
                          bgcolor="white"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },

                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 5 ? 1 : 0,
                          }}>
                          <GrView
                            style={{
                              fontSize: "18px",
                            }}
                          />
                          <span className="product-action-tooltip">
                            Quick View
                          </span>
                        </Box>

                        <Box
                          className="fade-right"
                          position="absolute"
                          top="36%"
                          right="3%"
                          width="38px"
                          height="38px"
                          bgcolor="white"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },

                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 5 ? 1 : 0,
                          }}>
                          <FaGgCircle
                            style={{
                              fontSize: "18px",
                            }}
                          />
                          <span className="product-action-tooltip">
                            Product Details
                          </span>
                        </Box>
                        <Box
                          className="fade-left"
                          position="absolute"
                          top="10%"
                          left="0%"
                          width="38px"
                          height="22px"
                          bgcolor="#f50963"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },
                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 5 ? 1 : 0,
                          }}>
                          <span style={{ fontSize: "13px", color: "white" }}>
                            Sales
                          </span>
                        </Box>

                        <Box
                          className="fade-left"
                          position="absolute"
                          top="18%"
                          left="0%"
                          width="38px"
                          height="22px"
                          bgcolor="#03041c"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },
                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 5 ? 1 : 0,
                          }}>
                          <span style={{ fontSize: "13px", color: "white" }}>
                            -10%
                          </span>
                        </Box>
                      </>
                    )}
                  </Box>
                  <Typography
                    variant="h6"
                    mt={2}
                    ml={2}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#525258",
                      fontFamily: "sans-serif",
                      "&:hover": { color: "#f50963", cursor: "pointer" },
                    }}>
                    Tempo Sphera Spinning Reel
                  </Typography>
                  <Typography
                    variant="h6"
                    mt={1}
                    ml={2}
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#f50963",
                      fontFamily: "sans-serif",
                    }}>
                    <span
                      style={{
                        textDecoration: "line-through",
                        marginRight: "8px",
                      }}>
                      $799.00
                    </span>
                    $679.15
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3} mt={3}>
                  <Box
                    position="relative"
                    onMouseEnter={() => handleMouseEnter(6)}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                      width: "306px",
                      height: "359px",
                      overflow: "hidden",
                    }}>
                    <img
                      src={product5}
                      alt="STANLEY STPP7502 750W 2mm Planer"
                      style={{
                        width: "100%",
                        height: "100%",
                        transition: "transform 0.3s ease-in-out",
                        transform:
                          hoveredIndex === 6 ? "scale(1.1)" : "scale(1)",
                      }}
                    />
                    {hoveredIndex === 6 && (
                      <>
                        <Box
                          className="fade-up"
                          position="absolute"
                          bottom={0}
                          left={0}
                          right={0}
                          fontWeight={600}
                          fontSize={18}
                          bgcolor="#03041c"
                          color="white"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          height="50px"
                          sx={{
                            "&:hover": {
                              cursor: "pointer",
                              backgroundColor: "#f50963",
                            },
                          }}>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}>
                            <IoCart style={{ marginRight: "8px" }} /> Add to
                            Cart
                          </span>
                        </Box>
                        <Box
                          className="fade-right"
                          position="absolute"
                          top="10%"
                          right="3%"
                          width="38px"
                          height="38px"
                          bgcolor="white"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },
                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 6 ? 1 : 0,
                          }}>
                          <MdFavoriteBorder
                            style={{
                              fontSize: "20px",
                            }}
                          />
                          <span className="product-action-tooltip">
                            Add to Wishlist
                          </span>
                        </Box>

                        <Box
                          className="fade-right"
                          position="absolute"
                          top="23%"
                          right="3%"
                          width="38px"
                          height="38px"
                          bgcolor="white"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },

                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 6 ? 1 : 0,
                          }}>
                          <GrView
                            style={{
                              fontSize: "18px",
                            }}
                          />
                          <span className="product-action-tooltip">
                            Quick View
                          </span>
                        </Box>

                        <Box
                          className="fade-right"
                          position="absolute"
                          top="36%"
                          right="3%"
                          width="38px"
                          height="38px"
                          bgcolor="white"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },

                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 6 ? 1 : 0,
                          }}>
                          <FaGgCircle
                            style={{
                              fontSize: "18px",
                            }}
                          />
                          <span className="product-action-tooltip">
                            Product Details
                          </span>
                        </Box>
                      </>
                    )}
                  </Box>
                  <Typography
                    variant="h6"
                    mt={2}
                    ml={2}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#525258",
                      fontFamily: "sans-serif",
                      "&:hover": { color: "#f50963", cursor: "pointer" },
                    }}>
                    E68 Wireless Headphone Bluetooth
                  </Typography>
                  <Typography
                    variant="h6"
                    mt={1}
                    ml={2}
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#f50963",
                      fontFamily: "sans-serif",
                    }}>
                    $114.00
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3} mt={3}>
                  <Box
                    position="relative"
                    onMouseEnter={() => handleMouseEnter(7)}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                      width: "306px",
                      height: "359px",
                      overflow: "hidden",
                    }}>
                    <img
                      src={product8}
                      alt="STANLEY STPP7502 750W 2mm Planer"
                      style={{
                        width: "100%",
                        height: "100%",
                        transition: "transform 0.3s ease-in-out",
                        transform:
                          hoveredIndex === 7 ? "scale(1.1)" : "scale(1)",
                      }}
                    />
                    {hoveredIndex === 7 && (
                      <>
                        <Box
                          className="fade-up"
                          position="absolute"
                          bottom={0}
                          left={0}
                          right={0}
                          fontWeight={600}
                          fontSize={18}
                          bgcolor="#03041c"
                          color="white"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          height="50px"
                          sx={{
                            "&:hover": {
                              cursor: "pointer",
                              backgroundColor: "#f50963",
                            },
                          }}>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}>
                            <IoCart style={{ marginRight: "8px" }} /> Add to
                            Cart
                          </span>
                        </Box>

                        <Box
                          className="fade-left"
                          position="absolute"
                          top="10%"
                          left="0%"
                          width="38px"
                          height="22px"
                          bgcolor="#f50963"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },
                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 7 ? 1 : 0,
                          }}>
                          <span style={{ fontSize: "13px", color: "white" }}>
                            Sales
                          </span>
                        </Box>

                        <Box
                          className="fade-left"
                          position="absolute"
                          top="18%"
                          left="0%"
                          width="38px"
                          height="22px"
                          bgcolor="#03041c"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },
                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 7 ? 1 : 0,
                          }}>
                          <span style={{ fontSize: "13px", color: "white" }}>
                            -10%
                          </span>
                        </Box>

                        <Box
                          className="fade-right"
                          position="absolute"
                          top="10%"
                          right="3%"
                          width="38px"
                          height="38px"
                          bgcolor="white"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },
                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 7 ? 1 : 0,
                          }}>
                          <MdFavoriteBorder
                            style={{
                              fontSize: "20px",
                            }}
                          />
                          <span className="product-action-tooltip">
                            Add to Wishlist
                          </span>
                        </Box>

                        <Box
                          className="fade-right"
                          position="absolute"
                          top="23%"
                          right="3%"
                          width="38px"
                          height="38px"
                          bgcolor="white"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },

                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 7 ? 1 : 0,
                          }}>
                          <GrView
                            style={{
                              fontSize: "18px",
                            }}
                          />
                          <span className="product-action-tooltip">
                            Quick View
                          </span>
                        </Box>

                        <Box
                          className="fade-right"
                          position="absolute"
                          top="36%"
                          right="3%"
                          width="38px"
                          height="38px"
                          bgcolor="white"
                          border="1px solid #ccc"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#f50963",
                              color: "white",
                            },

                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: hoveredIndex === 7 ? 1 : 0,
                          }}>
                          <FaGgCircle
                            style={{
                              fontSize: "18px",
                            }}
                          />
                          <span className="product-action-tooltip">
                            Product Details
                          </span>
                        </Box>
                      </>
                    )}
                  </Box>
                  <Typography
                    variant="h6"
                    mt={2}
                    ml={2}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#525258",
                      fontFamily: "sans-serif",
                      "&:hover": { color: "#f50963", cursor: "pointer" },
                    }}>
                    VR Virtual Reality Headset
                  </Typography>
                  <Typography
                    variant="h6"
                    mt={1}
                    ml={2}
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#f50963",
                      fontFamily: "sans-serif",
                    }}>
                    <span
                      style={{
                        textDecoration: "line-through",
                        marginRight: "8px",
                      }}>
                      $137.00
                    </span>
                    $123.30
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end ",
          alignItems: "center",
          mt: 5,
          mb: 5,
          mr: 19,
        }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#f50963",
            color: "white",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#f50963",
              boxShadow: "0 0 10px #f50963",
              transition: "0.4s ease-in-out",
            },
          }}>
          View All Productss
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
          mb: 5,
        }}>
        <Grid container spacing={3} sx={{ ml: { xs: 0, md: 10 } }}>
          <Grid item xs={12} position="relative" mr={10}>
            <img
              style={{
                width: "100%",
                height: "auto",
                overflow: "hidden",
                transition: "transform 0.3s ease-in-out",
              }}
              src={banner1a1774ed4}
              alt="Apple iPhone 12 Pro"
            />
            <Grid
              sx={{
                position: "absolute",
                top: "32%",
                left: "20%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "#525258",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "Bold",
                fontSize: { xs: "12px", md: "15px" },
              }}>
              <span>Apple iPhone 12 Pro</span>
            </Grid>

            <Grid
              item
              xs={4}
              sx={{
                position: "absolute",
                top: "45%",
                left: "20%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "#525258",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "Bold",
                fontSize: { xs: "12px", md: "15px" },
              }}>
              <Typography
                variant="h6"
                mt={2}
                ml={2}
                sx={{
                  marginBottom: "21px",
                  lineHeight: "1.09",
                  fontSize: "40px",
                  fontWeight: "bold",
                  color: "#03041c",
                  fontFamily: "Roboto, sans-serif",
                  "&:hover": {
                    color: "#f50963",
                    cursor: "pointer",
                    transition: "0.4s ease-in-out",
                  },
                }}>
                The wait is on: iPhone 12 Max Pro
              </Typography>
            </Grid>

            <Grid
              item
              xs={4}
              sx={{
                position: "absolute",
                top: "60%",
                left: "22.8%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "#525258",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "Bold",
                fontSize: { xs: "12px", md: "15px" },
              }}>
              <Typography
                variant="h6"
                mt={2}
                ml={2}
                sx={{
                  marginBottom: "21px",
                  lineHeight: "1.09",
                  fontSize: "18px",

                  color: "#525258",
                  fontFamily: "Roboto, sans-serif",
                }}>
                Last call for up to{" "}
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#03041c",
                  }}>
                  32%
                </span>{" "}
                off!
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                paddingTop: "4px",
                width: "8%",
                height: "6%",
                position: "absolute",
                top: "75%",
                left: "20%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                backgroundColor: "#fff",
                "&:hover": {
                  backgroundColor: "#f50963",
                  cursor: "pointer",
                  transition: "0.4s ease-in-out",
                },
                "&:hover .button-text": {
                  color: "#fff",
                },
              }}>
              <Button sx={{ padding: 0 }}>
                <span
                  className="button-text"
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#03041c",
                    fontFamily: "Roboto, sans-serif",
                  }}>
                  Buy Now
                </span>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
