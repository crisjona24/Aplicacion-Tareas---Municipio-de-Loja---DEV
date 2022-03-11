const Tarea_Controlador = {};

// Crear/Guardar Tarea
Tarea_Controlador.Tarea = (req, res) => {
    try{ 
        res.render("Tarea") //Renderizamos
    }catch (error){
        console.log(error);
    }
}
Tarea_Controlador.crear_Tarea = async (req, res) => {
    try{ 
        res.redirect("/index/") //Redireccionamos
        //Codigo de guardado
    }catch (error){
        console.log(error);
    }
};


//Edicion de tareas
Tarea_Controlador.editar_Tarea = (req, res) => {
    try{ 
        res.render("Tarea_Editar") //Renderizamos
    }catch (error){
        console.log(error);
    }
}
Tarea_Controlador.actualizar_Tarea = async (req, res) => {
    try{ 
        res.redirect("/index/") //Redireccionamos
        //Codigo de actulizado
    }catch (error){
        console.log(error);
    }
};

//Informacion de tareas
Tarea_Controlador.informacion_Tarea = (req, res) => {
    try{ 
        res.render("Tarea_Informacion") //Renderizamos
    }catch (error){
        console.log(error);
    }
}

Tarea_Controlador.informacionOpciones_Tarea = (req, res) => {
    try{ 
        res.render("Tarea_Informacion_Opciones") //Renderizamos
    }catch (error){
        console.log(error);
    }
}

//Listado de tareas
Tarea_Controlador.listado_Tarea = (req, res) => {
    try{ 
        res.render("Tarea_Listado") //Renderizamos
    }catch (error){
        console.log(error);
    }
}

//Estado de tareas
Tarea_Controlador.estado_Tarea = (req, res) => {
    try{ 
        res.redirect("/index/") //Redireccionamos
        //Codigo de actulizado de estado
    }catch (error){
        console.log(error);
    }
}


//EXPORTADO DE RUTAS
module.exports = Tarea_Controlador;