/* eslint-disable react/prop-types */
import { Button, Dialog, TextField } from "@mui/material"
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const endPoint = "http://localhost:8000/api";
const EditBebida = ({inputs, handleChange, open, setOpen, setInputs}) => {
    const {id} = useParams();
    const handleUpdate = async (e) =>{
        e.preventDefalt();
        await axios.put(`${endPoint}/bebidas/${id}`, {
            nombre: inputs.nombre,
            presentacion: inputs.presentacion,
            sabor: inputs.sabor
        });
    }
    useEffect(() => {
        const getBebidaById = async () => {
            const response = await axios.get(`${endPoint}/bebidas/${id}`);
            setInputs(response.data);
        }
        getBebidaById();
    }, [])
  return (
    <>
        <Dialog open= {open} sx={{ padding: '1rem'}}>
        <form style={{
          display: "flex",
          flexDirection: 'column',
          padding: "2rem",
          justifyContent: 'center',
          alignItems: 'center'
        }} onSubmit={handleUpdate}>
          <TextField label='nombre' name='nombre'
          // eslint-disable-next-line react/prop-types
          value={inputs.nombre} variant="filled" onChange={handleChange} sx={{margin:'1rem', width:'300px'}}/>
          <TextField label='presentación'  name='presentacion' value={inputs.presentacion} variant="filled" sx={{margin:'1rem', width:'300px'}} onChange={handleChange} type="number"/>
          <TextField label='sabor' name='sabor' value={inputs.sabor} variant="filled" sx={{margin:'1rem', width:'300px'}} onChange={handleChange}/>
              <div>
                <Button variant="contained" sx={{margin: "2rem"}} onClick={()=>setOpen(!open)}>Cancelar</Button>
                <Button variant="contained" color="primary" sx={{margin: "2rem"}} type="submit">Registrar</Button>
              </div>
        </form>
      </Dialog>
    </>
  )
}

export default EditBebida