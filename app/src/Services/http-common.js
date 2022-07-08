import axios from 'axios';

export default axios.create({
    url: "https://itsc-proyectofinal.azurewebsites.net/paciente",
    header:{
        "Content-type":"application/json"
    }
});
