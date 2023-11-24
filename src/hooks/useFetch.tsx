import React from "react";

// Criado um hook chamado useFetch que recebe uma função genérica chamada T que recebe a interface dos dados da API. Dentro do parâmetro da função, foi passado uma url e um objeto de opções com os mesmos tipos dos usado no fetch.
function useFetch<T>(url: RequestInfo | URL, options?: RequestInit) {
  const [data, setData] = React.useState<T | null>(null); // Criado um estado chamado data e uma função que altera o estado chamada setData que recebe um tipo genérico T ou null. O estado inicia com o valor null.
  const [loading, setLoading] = React.useState(false); // Criado um estado chamado loading e uma função que altera o estado chamada setLoading. O estado inicia com o valor false.
  const [error, setError] = React.useState<string | null>(null); // Criado um estado chamado error e uma função que altera o estado chamada setError que recebe um tipo string ou null. O estado inicia com o valor null.

  const optionsRef = React.useRef(options); // Criado uma referência chamada optionsRef que recebe o objeto de opções.
  optionsRef.current = options; // A referência optionsRef recebe o objeto de opções.

  // Criado um efeito que é executado toda vez que o estado/valor da url mudar.
  React.useEffect(() => {
    const controller = new AbortController(); // Criado uma constante chamada controller que recebe um novo AbortController.
    const { signal } = controller; // Criado uma constante chamada signal que recebe o sinal do controller.

    const fetchData = async () => {
      setLoading(true); // Executa a função setLoading e altera o estado para true.
      setData(null); // Executa a função setData e altera o estado para null, limpando o estado data.

      // Tenta executar o código dentro do bloco try, caso ocorra um erro, executa o código dentro do bloco catch e por fim, executa o código dentro do bloco finally independente se ocorreu um erro ou não.
      try {
        // A url é o que está sendo passado como parâmetro para o hook useFetch e o objeto de opções é o que está sendo passado como parâmetro para o fetch.
        const response = await fetch(url, {
          signal, // O objeto de opções recebe o sinal do controller, para que quando o componente for desmontado, aborta a requisição.
          ...optionsRef.current, // O objeto de opções recebe o objeto de opções que está na referência optionsRef.
        }); // Criado uma constante chamada response que armazena o retorno da requisição. Sendo a url e o objeto de opções estático que foi criado na referência para que o useEffect não peça para adicionar o objeto de opções como dependência.

        if (!response.ok) throw new Error(`Error: ${response.status}`); // Se a resposta não for ok, executa a função throw new Error e retorna uma mensagem de erro com o status da resposta. Levando para o bloco catch.

        const json = await response.json(); // Criado uma constante chamada json que recebe o retorno da resposta da requisição convertida em json.

        // Se o sinal não estiver abortado, executa a função setData e altera o estado data com o valor da constante json.
        if (!signal.aborted) {
          setData(json); // Atualiza o estado data com o valor da constante json.
        }
      } catch (error) {
        // Se o sinal não estiver abortado e o erro for uma instância de Error, executa o if.
        if (!signal.aborted && error instanceof Error) {
          setError(error.message); // Caso ocorra um erro, a função setError é executada e recebe a mensagem de erro.
        }
      } finally {
        // Se o sinal não estiver abortado, executa o if.
        if (!signal.aborted) {
          setLoading(false); // Executa a função setLoading e altera o estado para false.
        }
      }
    };
    fetchData(); // Executa a função fetchData.

    // Quando o componente for desmontado, aborta a requisição para que não seja executada mais de uma vez.
    return () => {
      controller.abort(); // Quando o componente for desmontado, aborta a requisição.
    };
  }, [url]);

  return { data, loading, error }; // Retorna um objeto com os estados data, loading e error.
}

export default useFetch;
