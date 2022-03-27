package nameservice_test

import (
	"testing"

	keepertest "github.com/cosmonaut/nameservice/testutil/keeper"
	"github.com/cosmonaut/nameservice/testutil/nullify"
	"github.com/cosmonaut/nameservice/x/nameservice"
	"github.com/cosmonaut/nameservice/x/nameservice/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		WhoisList: []types.Whois{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.NameserviceKeeper(t)
	nameservice.InitGenesis(ctx, *k, genesisState)
	got := nameservice.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.WhoisList, got.WhoisList)
	// this line is used by starport scaffolding # genesis/test/assert
}
