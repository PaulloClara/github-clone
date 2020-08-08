export interface CustomHTMLElement extends HTMLElement {
  dataset: any;
}

export interface CustomEvent extends Event {
  target: CustomHTMLElement;
}
