import {handleErrors} from "./exception.js";
var URL = "http://localhost:3000/jogos";

export const getAllGames = async () => {
    try {
        // Fazendo uma solicitação GET para obter produtos da AP
        const response = await fetch(URL);
        //lidando com oerros na resposta
        handleErrors(response);
  
        return await response.json();
      } catch (error) {
        console.log("Error >>>", error);
      }
};