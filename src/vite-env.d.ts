/// <reference types="vite/client" />

declare namespace Global {
  export type IconSvgElement = readonly (readonly [
    string,
    {
      readonly [key: string]: string | number
    }
  ])[]
}
