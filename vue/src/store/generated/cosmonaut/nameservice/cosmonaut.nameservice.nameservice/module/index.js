// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgBuyName } from "./types/nameservice/tx";
import { MsgSetName } from "./types/nameservice/tx";
import { MsgDeleteName } from "./types/nameservice/tx";
const types = [
    ["/cosmonaut.nameservice.nameservice.MsgBuyName", MsgBuyName],
    ["/cosmonaut.nameservice.nameservice.MsgSetName", MsgSetName],
    ["/cosmonaut.nameservice.nameservice.MsgDeleteName", MsgDeleteName],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgBuyName: (data) => ({ typeUrl: "/cosmonaut.nameservice.nameservice.MsgBuyName", value: MsgBuyName.fromPartial(data) }),
        msgSetName: (data) => ({ typeUrl: "/cosmonaut.nameservice.nameservice.MsgSetName", value: MsgSetName.fromPartial(data) }),
        msgDeleteName: (data) => ({ typeUrl: "/cosmonaut.nameservice.nameservice.MsgDeleteName", value: MsgDeleteName.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
