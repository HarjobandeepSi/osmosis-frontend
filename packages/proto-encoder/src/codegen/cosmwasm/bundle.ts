//@ts-nocheck
import * as _10 from "./wasm/v1/authz";
import * as _11 from "./wasm/v1/genesis";
import * as _12 from "./wasm/v1/ibc";
import * as _13 from "./wasm/v1/proposal";
import * as _14 from "./wasm/v1/query";
import * as _15 from "./wasm/v1/tx";
import * as _85 from "./wasm/v1/tx.amino";
import * as _86 from "./wasm/v1/tx.registry";
import * as _16 from "./wasm/v1/types";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._85,
      ..._86,
    };
  }
}
