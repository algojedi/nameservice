package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/cosmonaut/nameservice/testutil/keeper"
	"github.com/cosmonaut/nameservice/x/nameservice/keeper"
	"github.com/cosmonaut/nameservice/x/nameservice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.NameserviceKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
