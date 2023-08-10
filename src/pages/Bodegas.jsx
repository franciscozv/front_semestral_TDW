import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
const endPoint = "http://localhost:8000/api";
const Bodegas = () => {
  const [bodegas, setBodegas] = useState([]);

  const getBodegas = async () => {
    const bodegas = await axios.get(`${endPoint}/bodegas`);
    setBodegas(bodegas.data);
  };
  useEffect(() => {
    getBodegas();
  }, []);
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({
    nombre: "",
    direccion: "",
  });
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nombre, direccion } = inputs;
    console.log(nombre, direccion);
    setOpen(!open);
  };
  return (
    <>
      <Button varitant="outline" onClick={handleOpen}>
        crear
      </Button>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Dirección</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bodegas.map((row) => (
              <TableRow
                key={row.nombre}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.nombre}
                </TableCell>
                <TableCell align="right">{row.direccion}</TableCell>
                <TableCell align="right">
                  <Box>
                    <Button
                      variant="outlined"
                      color="secondary"
                      sx={{ marginRight: "20px" }}
                    >
                      Edit
                    </Button>
                    <Button variant="outlined"  color="error">
                      Delete
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} sx={{ padding: "1rem" }}>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            label="nombre"
            name="nombre"
            value={inputs.nombre}
            variant="filled"
            onChange={handleChange}
            sx={{ margin: "1rem", width: "300px" }}
          />
          <TextField
            label="dirección"
            name="direccion"
            value={inputs.direccion}
            variant="filled"
            sx={{ margin: "1rem", width: "300px" }}
            onChange={handleChange}
          />
          <div>
            <Button
              variant="contained"
              sx={{ margin: "2rem" }}
              onClick={() => setOpen(!open)}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ margin: "2rem" }}
              type="submit"
            >
              Registrar
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default Bodegas;
