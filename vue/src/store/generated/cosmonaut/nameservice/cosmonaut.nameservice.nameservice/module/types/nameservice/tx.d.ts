import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "cosmonaut.nameservice.nameservice";
export interface MsgBuyName {
    creator: string;
    name: string;
    bid: string;
}
export interface MsgBuyNameResponse {
}
export interface MsgSetName {
    creator: string;
    name: string;
    value: string;
}
export interface MsgSetNameResponse {
}
export interface MsgDeleteName {
    creator: string;
    name: string;
}
export interface MsgDeleteNameResponse {
}
export declare const MsgBuyName: {
    encode(message: MsgBuyName, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBuyName;
    fromJSON(object: any): MsgBuyName;
    toJSON(message: MsgBuyName): unknown;
    fromPartial(object: DeepPartial<MsgBuyName>): MsgBuyName;
};
export declare const MsgBuyNameResponse: {
    encode(_: MsgBuyNameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBuyNameResponse;
    fromJSON(_: any): MsgBuyNameResponse;
    toJSON(_: MsgBuyNameResponse): unknown;
    fromPartial(_: DeepPartial<MsgBuyNameResponse>): MsgBuyNameResponse;
};
export declare const MsgSetName: {
    encode(message: MsgSetName, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSetName;
    fromJSON(object: any): MsgSetName;
    toJSON(message: MsgSetName): unknown;
    fromPartial(object: DeepPartial<MsgSetName>): MsgSetName;
};
export declare const MsgSetNameResponse: {
    encode(_: MsgSetNameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSetNameResponse;
    fromJSON(_: any): MsgSetNameResponse;
    toJSON(_: MsgSetNameResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetNameResponse>): MsgSetNameResponse;
};
export declare const MsgDeleteName: {
    encode(message: MsgDeleteName, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteName;
    fromJSON(object: any): MsgDeleteName;
    toJSON(message: MsgDeleteName): unknown;
    fromPartial(object: DeepPartial<MsgDeleteName>): MsgDeleteName;
};
export declare const MsgDeleteNameResponse: {
    encode(_: MsgDeleteNameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteNameResponse;
    fromJSON(_: any): MsgDeleteNameResponse;
    toJSON(_: MsgDeleteNameResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteNameResponse>): MsgDeleteNameResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    BuyName(request: MsgBuyName): Promise<MsgBuyNameResponse>;
    SetName(request: MsgSetName): Promise<MsgSetNameResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    DeleteName(request: MsgDeleteName): Promise<MsgDeleteNameResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    BuyName(request: MsgBuyName): Promise<MsgBuyNameResponse>;
    SetName(request: MsgSetName): Promise<MsgSetNameResponse>;
    DeleteName(request: MsgDeleteName): Promise<MsgDeleteNameResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
