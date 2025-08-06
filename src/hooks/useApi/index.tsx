import { useState } from "react";

function useApi<Response, Data>(
  api: (...args: unknown[]) => Response | undefined,
  mapper: (rawData: Response) => Data,
) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Data | null>(null);

  const fetch = async () => {
    setIsLoading(true);
    try {
      const rawData = await api();
      if (rawData) {
        const data = mapper(rawData);
        setData(data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    fetch,
    isLoading,
  };
}

export default useApi;
