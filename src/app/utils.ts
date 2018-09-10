
export function loadExternalScript(src: string, onLoad: () => void) {
  const script = document.createElement('script');
  script.async = true;
  script.type = 'text/javascript';
  script.src = src;

  if (onLoad) {
    script.onload = onLoad;
  }
  const node = document.getElementsByTagName('script')[0];
  node.parentNode.insertBefore(script, node);
}
