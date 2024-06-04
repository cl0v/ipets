export const useUpdateQueryStringParameter = (window: Window, url: URL, key: string, value: string) => {
  url.searchParams.set(key, value);

  // Substitui o estado da URL sem recarregar a página
  window.history.replaceState({}, '', url.toString());
}
