  // Função para buscar e exibir dados da API
export const handleErrors = (response) => {
    if (!response.ok) {
      throw Error(response);
    }
    return response;
  };

  