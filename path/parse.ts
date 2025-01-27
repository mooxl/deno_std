// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.

import { isWindows } from "../_util/os.ts";
import type { ParsedPath } from "./_interface.ts";
import { posixParse, windowsParse } from "./_parse.ts";

/**
 * Return a `ParsedPath` object of the `path`.
 * @param path to process
 */
export function parse(path: string): ParsedPath {
  return isWindows ? windowsParse(path) : posixParse(path);
}
