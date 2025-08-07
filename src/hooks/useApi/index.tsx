import type { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import type UseApiError from "./type";

function useApi<Response, Data>(
  api: (
    ...args: unknown[]
  ) => Promise<AxiosResponse<Response, unknown> | undefined>,
  mapper: (rawData: Response) => Data,
) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<UseApiError | null>(null);

  const fetch = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const rawData = await api();
      if (rawData) {
        const data = mapper(rawData.data);
        setData(data);
      }
    } catch (e) {
      const error = e as AxiosError;
      setError({ message: error.message, status: error.status });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    error,
    fetch,
    isLoading,
  };
}

export default useApi;
