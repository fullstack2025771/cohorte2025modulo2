import { verifyToken} from "../config/jwt.js";

export const auth = (requiredRole)=> {
    return async(request,response, next) => {

        //1. Verificar si se envia un token a la cabecera de la peticion
        const token = request.headers["authorization"];
        console.log( "Cual es es el token recibido en la cabecera de la peticion"+ token);
        
        if(!token){
            return response.status(401).json({
                "mensaje": "No se encontro token, permiso denegado"
            });
        }
        // 2. Verificar que el token sea permitido (jwt)


        const allowedToken = token.split(" ")[1];
        console.log("Token despues de separarlo del Bearer:" + allowedToken);
        try {
            const decoded = await verifyToken(allowedToken);
            console.log("Informacion decodificada del token:" , decoded);
        
        // 3. Verificar especificamente si el rol es de administrador
        if (requiredRole === "admin" && decoded.admin === false){
            return response.status(401).json({
                "mensaje":"Acceso no permitido, no eres administrador"
            });
        }

        } catch (error) {
            return response.status(401).json({
                "Mensaje": "Fallo la autenticacion :Token no permitido",
            });
        }
        next();
    }
}
