const Reclamo_Controlador = {};

// Generar Reclamo de Tarea
Reclamo_Controlador.Generar_Reclamo = (req, res) => {
    try{ 
        res.render("Tarea_Reclamo") //Renderizamos
    }catch (error){
        console.log(error);
    }
}

// Generar Denunica de Tarea
Reclamo_Controlador.Generar_Denuncia = (req, res) => {
    try{ 
        res.render("Tarea_Denuncia") //Renderizamos
    }catch (error){
        console.log(error);
    }
}


//EXPORTADO DE RUTAS
module.exports = Reclamo_Controlador;