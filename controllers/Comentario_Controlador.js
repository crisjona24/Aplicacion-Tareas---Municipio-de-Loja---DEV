const Comentario_Controlador = {};

// Generar Comentario de Tarea
Comentario_Controlador.Generar_Comentario = (req, res) => {
    try{ 
        res.render("Tarea_Comentario") //Renderizamos
    }catch (error){
        console.log(error);
    }
}



//EXPORTADO DE RUTAS
module.exports = Comentario_Controlador;