const Propuesta_Controlador = {};

// Visualizar Propuesta
Propuesta_Controlador.Visualizar_Propuesta = (req, res) => {
    try{ 
        res.render("Propuesta_Descripcion") //Renderizamos
    }catch (error){
        console.log(error);
    }
}

// Elaborar Propuesta
Propuesta_Controlador.Crear_Propuesta = (req, res) => {
    try{ 
        res.render("Propuesta") //Renderizamos
    }catch (error){
        console.log(error);
    }
}

// Listado Propuesta
Propuesta_Controlador.Lista_Propuesta = (req, res) => {
    try{ 
        res.render("Propuesta_Listado") //Renderizamos
    }catch (error){
        console.log(error);
    }
}


//EXPORTADO DE RUTAS
module.exports = Propuesta_Controlador;