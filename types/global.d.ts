// Minimal JSX declarations to allow using JSX without full @types/react
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

