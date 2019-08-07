/*!
 * is-gen-func <https://github.com/nivrith/is-gen-func>
 *
 * Copyright (c) Nivrith
 * Licensed under the MIT License.
 */



export const isGenFunc = (fn: any): boolean => ['GeneratorFunction', 'AsyncGeneratorFunction'].indexOf(fn.constructor.name) > -1;
export default isGenFunc;
