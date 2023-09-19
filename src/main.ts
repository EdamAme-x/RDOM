//@ts-ignore
import * as $ from '../packages/mod.ts';

let test = $.div({ class: 'hello' }, $.div({ class: 'text' }, 'world'));

$.patch(document.querySelector('body'), test);
