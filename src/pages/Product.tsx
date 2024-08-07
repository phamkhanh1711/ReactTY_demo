import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import axios from "axios";

type Food = {
  foodId: number;
  foodName: string;
  foodImage: string;
  foodPrice: number;
};

function Product() {
  const [getDatas, setDatas] = useState<Food[]>([]);

  useEffect(() => {
    axios("http://localhost:4000/food/all-Food")
      .then((response) => {
        console.log(response.data);

        setDatas(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
      }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <TableContainer
            component={Paper}
            sx={{
              width: "800px",
              marginLeft: "-30%",
            }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Id</TableCell>
                  <TableCell align="left">Tên Sản Phẩm</TableCell>
                  <TableCell align="left">Hình Ảnh</TableCell>
                  <TableCell align="left">Giá</TableCell>
                  <TableCell align="left">Thao tác</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {getDatas.map((Food) => (
                  <TableRow key={Food.foodId}>
                    <TableCell component="th" scope="row">
                      {Food.foodId}
                    </TableCell>
                    <TableCell align="left">{Food.foodName}</TableCell>
                    <TableCell align="left">
                      {" "}
                      <img
                        src={Food.foodImage}
                        style={{ maxWidth: "50px", maxHeight: "50px" }}
                        alt="Food"
                      />
                    </TableCell>
                    <TableCell align="left">{Food.foodPrice}</TableCell>
                    <TableCell align="left">
                      {/* Thao tác như Xóa, Sửa, vv. */}
                      <button>Xóa</button>
                      <button>Sửa</button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Product;
