/* eslint-disable react/prop-types */
import { Button, Dialog, TextField } from "@mui/material"
// eslint-disable-next-line react/prop-types
const CreateBebidas = ( {handleSubmit, handleChange, inputs, setOpen, open}) => {
  return (
    <>
        <Dialog open= {open} sx={{ padding: '1rem'}}>
        <form style={{
          display: "flex",
          flexDirection: 'column',
          padding: "2rem",
          justifyContent: 'center',
          alignItems: 'center'
        }} onSubmit={handleSubmit}>
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

export default CreateBebidas