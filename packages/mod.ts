//@ts-ignore
import { RDOM } from './rdom.ts';

export function patch(...attr: any[]) {
  RDOM.patch(...attr);
}

export function div(
  attr: {
    [key: string]: string;
  },
  ...children: Element[]
) {
  return RDOM.create('div', attr, children);
}
