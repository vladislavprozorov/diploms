import { FC, useState } from 'react';

export default function useFetching(callback) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetching = async (...args) => {
    try {
      setLoading(true);
      await callback(...args);
    } catch (error) {
      setError(error?.message || 'Неизвестная ошибка');
      alert(error);
    } finally {
      setLoading(false);
    }
  };
  return [fetching, loading, error];
}
