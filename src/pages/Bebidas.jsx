import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, TableBody, TableCell, TableContainer, TableHead, TableRow, Table } from "@mui/material";
import {useNavigate} from 'react-router-dom'
import CreateBebidas from "./CreateBebidas";
const endPoint = "http://localhost:8000/api";
export default function Bebidas() {
  const navigate = useNavigate();
  const [bebidas, setBebidas] = useState([]);

  const getBebidas = async () => {
    const bebidas = await axios.get(`${endPoint}/bebidas`);
    setBebidas(bebidas.data);
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${endPoint}/bebida/${id}`);
      setBebidas(prevBebidas => prevBebidas.filter(bebida => bebida.id !== id));
    } catch (error) {
      console.error("Error eliminando bebida:", error);
    }
  };
  
  useEffect(() => {
    getBebidas();
  }, []);
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({
    nombre: '',
    presentacion: '',
    sabor: ''
  })
  const handleOpen = () => {
    setOpen(!open);
  }
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {nombre, presentacion, sabor} = inputs;
    const response = await axios.post(`${endPoint}/bebida`, {nombre: nombre , presentacion: presentacion, sabor: sabor});
    const newBebidaId = response.data.id;
    setBebidas(prevBebidas => [...prevBebidas, { id: newBebidaId, nombre, presentacion, sabor }]);
    setInputs({
      nombre: '',
      presentacion: '',
      sabor: ''
    });
    setOpen(!open)
    navigate("/Bebidas");
  }
  return (
    <>
    <Button variant= 'outline' onClick={handleOpen}>crear</Button>
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Presentación (lts)</TableCell>
            <TableCell align="right">Sabor</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bebidas.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell align="right">{row.presentacion}</TableCell>
              <TableCell align="right">{row.sabor}</TableCell>
              <TableCell align="right">
                <Box>
                  <Button variant="outlined" color="secondary" sx={{marginRight: '20px'}}>Edit</Button>
                  <Button variant='outlined' color='error' onClick={() => handleDelete(row.id)}>Delete</Button>
                </Box>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        <CreateBebidas handleSubmit= { handleSubmit } handleChange= { handleChange } inputs={ inputs } setOpen= {setOpen} open={open}/>
        {/* <EditBebida handleChange = {handleChange} inputs={inputs} setOpen= {setOpen} open={ open } setInputs={setInputs}/> */}
    </>
  );
}
