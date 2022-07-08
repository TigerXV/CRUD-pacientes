import React, { useState, useEffect } from 'react'
import '../../App.css'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import { Table, TableContainer, TableHead, TableCell, TableRow, TableBody, Modal, Button, TextField } from '@material-ui/core'
import { Edit, Delete } from '@mui/icons-material'


const url = "https://itsc-proyectofinal.azurewebsites.net/paciente/";

const useStyles = makeStyles((theme) => ({

  modal: {
    position: 'absolute',
    width: 400,
    height: 300,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[9],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5%'
  },
  iconos: {
    cursor: 'pointer'
  },
  inputMaterial: {
    width: '100%'
  }
}));



export const App = () => {
  const styles = useStyles();
  const [Data, setData] = useState([])
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [Paciente, setPaciente] = useState({
    nombre: '',
    apellido: '',
    fechaNacimiento: ''
  })

  const handleChange = e => {
    const { name, value } = e.target;
    setPaciente(prevState => ({
      ...prevState,
      [name]: value
    }))

    console.log(Paciente)
  }
  const peticionPost = async () => {
    await axios.post(url, Paciente).then(response => {
      setData(Data.concat(response.data))
      abrirCerrarModalInsertar()
    })
  }
const peticionPut = async () =>{
  await axios.put(url+Paciente.pacienteId, Paciente)
  .then(response =>{
    var dataNueva = Data;
    dataNueva.map(dat =>{
      if(Paciente.pacienteId===dat.pacienteId){
        dat.nombre = Paciente.nombre;
        dat.apellido = Paciente.apellido;
        dat.fechaNacimiento = Paciente.fechaNacimiento;
      }
    })
    setData(dataNueva);
    abrirCerrarModalEditar();
  })
}
  const abrirCerrarModalInsertar = () => {

    setModalInsertar(!modalInsertar);
  }

  const abrirCerrarModalEditar = () => {

    setModalEditar(!modalEditar);
  }

  const seleccionarPaciente  = (data, caso)=>{
    setPaciente(data);
    (caso==='Editar')&&setModalEditar(true);
  }
  useEffect(() => {

    const peticionGet = async () => {
      axios.get(url).then(response => {
        setData(response.data);
      })
    }

    peticionGet();

  }, [])


  const bodyInsertar = (
    <div className={styles.modal}>
      <h3>Agregar Nuevo Paciente</h3>
      <TextField name="nombre" className='{styles.inputMaterial} ' label="Nombre" onChange={handleChange} />
      <br />
      <TextField name="apellido" className='{styles.inputMaterial} ' label="Apellido" onChange={handleChange} />
      <br />
      {/* <TextField  name ="FechaDenacimiento "className='{styles.inputMaterial} ' label="FechaDenacimiento" onChange={handleChange} />
      <br /> */}
      <TextField
        className='{styles.inputMaterial}'
        name="fechaNacimiento"
        label="Fecha de nacimiento"
        InputLabelProps={{ shrink: true, required: true }}
        type="date"
        onChange={handleChange}
      />
      <br />


      <div align="right">
        <Button color="primary" onClick={()=>peticionPost()}>Insertar</Button>
        <Button onClick={()=>abrirCerrarModalInsertar()}>Cancelar</Button>
      </div>
    </div>
  )


  const bodyEditar  = (
    <div className={styles.modal}>
      <h3>Editar paciente</h3>
      <TextField name="pacienteId" className='{styles.inputMaterial} ' label="PacienteID" onChange={handleChange}  value = {Paciente && Paciente.pacienteId}/>
      <br />
      <TextField name="nombre" className='{styles.inputMaterial} ' label="Nombre" onChange={handleChange}  value = {Paciente && Paciente.nombre}/>
      <br />
      <TextField name="apellido" className='{styles.inputMaterial} ' label="Apellido" onChange={handleChange} value = {Paciente && Paciente.apellido}/>
      <br />
      {/* <TextField  name ="FechaDenacimiento "className='{styles.inputMaterial} ' label="FechaDenacimiento" onChange={handleChange} />
      <br /> */}
      <TextField
        className='{styles.inputMaterial}'
        name="fechaNacimiento"
        label="Fecha de nacimiento"
        InputLabelProps={{ shrink: true, required: true }}
        type="date"
        onChange={handleChange}
        value = {Paciente && Paciente.fechaNacimiento}
      />
      <br />


      <div align="right">
        <Button color="primary" onClick={()=>peticionPut()}>Editar</Button>
        <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
  )
  return (
    <>

      <div className='App'>
        <br />

        <Button onClick={()=>abrirCerrarModalInsertar()}>Insertar</Button>
        <br /> <br />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>PacienteID</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Apellido</TableCell>
                <TableCell>FechaDeNacimiento</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>



            <TableBody>
              {Data.map(cons => (
                <TableRow key={cons.pacienteId}>
                  <TableCell>{cons.pacienteId}</TableCell>
                  <TableCell>{cons.nombre}</TableCell>
                  <TableCell>{cons.apellido}</TableCell>
                  <TableCell>{cons.fechaNacimiento}</TableCell>
                  <TableCell>
                    <Edit className={styles.iconos} onClick={()=>seleccionarPaciente(Data,'Editar')}/>
                    &nbsp; &nbsp;
                    <Delete />

                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>



        <Modal open={modalInsertar}
          onClose={abrirCerrarModalInsertar}
        >
          {bodyInsertar}
        </Modal>

        <Modal open={modalEditar}
          onClose={abrirCerrarModalEditar}
        >
          {bodyEditar}
        </Modal>



      </div>



    </>
  )
}
