import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Cookies from "js-cookie";
import axios from "axios";

type IFormInput = {
  email: string;
  password: string;
};

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/auth/login",
        data
      );
      const token = response.data.data.accessToken;
      Cookies.set("token", token);
      alert("Đăng nhập thành công");
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <Box
      sx={{
        width: "636px",
        height: "516px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "30%",
        marginTop: "20px",
        padding: "10px",
        backgroundColor: "white",
        boxShadow: "0 30px 60px rgba(3, 4, 28, .1)",
        borderRadius: "5px",
      }}>
      <Grid
        container
        sx={{
          marginBottom: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Grid item xs={8}>
          <Grid item>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#000",
                textAlign: "center",
                marginBottom: "20px",
                letterSpacing: "0.1px",
              }}>
              Hello Again
            </Typography>
            <span
              style={{
                fontSize: "16px",
                color: "#525258",
                textAlign: "center",
                display: "block",
                marginBottom: "17px",
              }}>
              Enter your credentials to access your account
            </span>
          </Grid>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid item>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                sx={{ marginTop: "10px" }}
                {...register("email", {
                  required: "Email không được để trống",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Email không hợp lệ",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                sx={{ marginTop: "10px" }}
                {...register("password", {
                  required: "Password không được để trống",
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </Grid>
            <Grid
              item
              sx={{
                marginTop: "20px",
                width: "430px",
                height: "70px",
              }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  height: "40px",
                  marginBottom: "20px",
                  backgroundColor: "#f50963",
                  fontWeight: "bold",
                  color: "#fff",
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "15px",
                  letterSpacing: "0.1px",
                  position: "relative",
                  zIndex: "1",
                  boxShadow: "0 10px 20px rgba(245, 9, 99, .3)",
                }}>
                Sign In
              </Button>
            </Grid>
          </form>

          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{ color: "#f50963", textDecoration: "none" }}>
              Sign Up
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
