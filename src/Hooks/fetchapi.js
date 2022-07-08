export const getPaciente = async () =>{
    const url = `https://itsc-proyectofinal.azurewebsites.net/paciente`;
    const resp = await fetch(url);
    const data = await resp.json();
    const getdata = data.map(da=>({
        id: da.pacienteId,
        fechaNacimiento: da.fechaNacimiento,
        nombre: da.nombre,
        apellido: da.apellido
    }));
    return getdata;
}