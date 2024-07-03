const API_KEY = process.env.CRYPTO_API_KEY;

export async function GET(request: Request) {
  // const limit = new URL(request.url).searchParams.get('limit') || 5;

  // const response = await fetch(
  //   `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=${limit}&convert=GBP`,
  //   {
  //     headers: {
  //       'X-CMC_PRO_API_KEY': API_KEY!,
  //     },
  //   }
  // );

  // const res = await response.json();
  // return Response.json(res.data);
  return Response.json(data);
}

const data = [
  {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    slug: 'bitcoin',
    num_market_pairs: 11590,
    date_added: '2010-07-13T00:00:00.000Z',
    tags: [
      'mineable',
      'pow',
      'sha-256',
      'store-of-value',
      'state-channel',
      'coinbase-ventures-portfolio',
      'three-arrows-capital-portfolio',
      'polychain-capital-portfolio',
      'binance-labs-portfolio',
      'blockchain-capital-portfolio',
      'boostvc-portfolio',
      'cms-holdings-portfolio',
      'dcg-portfolio',
      'dragonfly-capital-portfolio',
      'electric-capital-portfolio',
      'fabric-ventures-portfolio',
      'framework-ventures-portfolio',
      'galaxy-digital-portfolio',
      'huobi-capital-portfolio',
      'alameda-research-portfolio',
      'a16z-portfolio',
      '1confirmation-portfolio',
      'winklevoss-capital-portfolio',
      'usv-portfolio',
      'placeholder-ventures-portfolio',
      'pantera-capital-portfolio',
      'multicoin-capital-portfolio',
      'paradigm-portfolio',
      'bitcoin-ecosystem',
      'ftx-bankruptcy-estate',
    ],
    max_supply: 21000000,
    circulating_supply: 19719375,
    total_supply: 19719375,
    infinite_supply: false,
    platform: null,
    cmc_rank: 1,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: '2024-07-03T11:45:00.000Z',
    quote: {
      GBP: {
        price: 47395.32850289042,
        volume_24h: 20320175529.923515,
        volume_change_24h: 16.2545,
        percent_change_1h: 0.13079568,
        percent_change_24h: -4.01967457,
        percent_change_7d: -1.84298439,
        percent_change_30d: -12.86325801,
        percent_change_60d: -6.17989244,
        percent_change_90d: -9.34082995,
        market_cap: 934606255996.6848,
        market_cap_dominance: 53.3338,
        fully_diluted_market_cap: 995301898560.695,
        tvl: null,
        last_updated: '2024-07-03T11:44:59.000Z',
      },
    },
  },
  {
    id: 1027,
    name: 'Ethereum',
    symbol: 'ETH',
    slug: 'ethereum',
    num_market_pairs: 9116,
    date_added: '2015-08-07T00:00:00.000Z',
    tags: [
      'pos',
      'smart-contracts',
      'ethereum-ecosystem',
      'coinbase-ventures-portfolio',
      'three-arrows-capital-portfolio',
      'polychain-capital-portfolio',
      'binance-labs-portfolio',
      'blockchain-capital-portfolio',
      'boostvc-portfolio',
      'cms-holdings-portfolio',
      'dcg-portfolio',
      'dragonfly-capital-portfolio',
      'electric-capital-portfolio',
      'fabric-ventures-portfolio',
      'framework-ventures-portfolio',
      'hashkey-capital-portfolio',
      'kenetic-capital-portfolio',
      'huobi-capital-portfolio',
      'alameda-research-portfolio',
      'a16z-portfolio',
      '1confirmation-portfolio',
      'winklevoss-capital-portfolio',
      'usv-portfolio',
      'placeholder-ventures-portfolio',
      'pantera-capital-portfolio',
      'multicoin-capital-portfolio',
      'paradigm-portfolio',
      'injective-ecosystem',
      'layer-1',
      'ftx-bankruptcy-estate',
    ],
    max_supply: null,
    circulating_supply: 120193480.39085065,
    total_supply: 120193480.39085065,
    infinite_supply: true,
    platform: null,
    cmc_rank: 2,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: '2024-07-03T11:44:00.000Z',
    quote: {
      GBP: {
        price: 2595.522675017071,
        volume_24h: 9992973183.750502,
        volume_change_24h: 24.2356,
        percent_change_1h: -0.32042984,
        percent_change_24h: -4.42056495,
        percent_change_7d: -2.3364362,
        percent_change_30d: -13.45691379,
        percent_change_60d: 4.7031331,
        percent_change_90d: -1.53637568,
        market_cap: 311964903743.6725,
        market_cap_dominance: 17.8068,
        fully_diluted_market_cap: 311964903743.6711,
        tvl: null,
        last_updated: '2024-07-03T11:44:59.000Z',
      },
    },
  },
  {
    id: 825,
    name: 'Tether USDt',
    symbol: 'USDT',
    slug: 'tether',
    num_market_pairs: 90815,
    date_added: '2015-02-25T00:00:00.000Z',
    tags: [
      'stablecoin',
      'asset-backed-stablecoin',
      'avalanche-ecosystem',
      'solana-ecosystem',
      'arbitrum-ecosytem',
      'moonriver-ecosystem',
      'injective-ecosystem',
      'bnb-chain',
      'usd-stablecoin',
      'optimism-ecosystem',
      'fiat-stablecoin',
    ],
    max_supply: null,
    circulating_supply: 112644773125.90714,
    total_supply: 116076856617.66272,
    platform: {
      id: 1027,
      name: 'Ethereum',
      symbol: 'ETH',
      slug: 'ethereum',
      token_address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    },
    infinite_supply: true,
    cmc_rank: 3,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: '2024-07-03T11:44:00.000Z',
    quote: {
      GBP: {
        price: 0.7862872135784454,
        volume_24h: 38801094013.27291,
        volume_change_24h: 20.5449,
        percent_change_1h: 0.00860838,
        percent_change_24h: 0.01235018,
        percent_change_7d: -0.10153178,
        percent_change_30d: -0.10458516,
        percent_change_60d: -0.14450684,
        percent_change_90d: -0.11633603,
        market_cap: 88571144785.34567,
        market_cap_dominance: 5.0556,
        fully_diluted_market_cap: 91269748150.84862,
        tvl: null,
        last_updated: '2024-07-03T11:44:59.000Z',
      },
    },
  },
  {
    id: 1839,
    name: 'BNB',
    symbol: 'BNB',
    slug: 'bnb',
    num_market_pairs: 2188,
    date_added: '2017-07-25T00:00:00.000Z',
    tags: [
      'marketplace',
      'centralized-exchange',
      'payments',
      'smart-contracts',
      'alameda-research-portfolio',
      'multicoin-capital-portfolio',
      'bnb-chain',
      'layer-1',
      'sec-security-token',
      'alleged-sec-securities',
      'celsius-bankruptcy-estate',
    ],
    max_supply: null,
    circulating_supply: 147583032.3711309,
    total_supply: 147583032.3711309,
    infinite_supply: false,
    platform: null,
    cmc_rank: 4,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: '2024-07-03T11:44:00.000Z',
    quote: {
      GBP: {
        price: 439.9890653140832,
        volume_24h: 1326593951.6089287,
        volume_change_24h: 10.5826,
        percent_change_1h: -0.08845206,
        percent_change_24h: -3.38014499,
        percent_change_7d: -2.53474926,
        percent_change_30d: -11.29652717,
        percent_change_60d: -5.72617195,
        percent_change_90d: -4.68969443,
        market_cap: 64934920469.19198,
        market_cap_dominance: 3.7065,
        fully_diluted_market_cap: 64934920469.19106,
        tvl: null,
        last_updated: '2024-07-03T11:44:59.000Z',
      },
    },
  },
  {
    id: 5426,
    name: 'Solana',
    symbol: 'SOL',
    slug: 'solana',
    num_market_pairs: 697,
    date_added: '2020-04-10T00:00:00.000Z',
    tags: [
      'pos',
      'platform',
      'solana-ecosystem',
      'cms-holdings-portfolio',
      'kenetic-capital-portfolio',
      'alameda-research-portfolio',
      'multicoin-capital-portfolio',
      'okx-ventures-portfolio',
      'layer-1',
      'ftx-bankruptcy-estate',
      'sec-security-token',
      'alleged-sec-securities',
      'cmc-crypto-awards-2024',
    ],
    max_supply: null,
    circulating_supply: 462773170.8363985,
    total_supply: 579378114.9238861,
    infinite_supply: true,
    platform: null,
    cmc_rank: 5,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: '2024-07-03T11:44:00.000Z',
    quote: {
      GBP: {
        price: 112.84570444718683,
        volume_24h: 2076325355.3185713,
        volume_change_24h: 54.7785,
        percent_change_1h: -0.96325586,
        percent_change_24h: -4.10627936,
        percent_change_7d: 4.84860996,
        percent_change_30d: -13.04208607,
        percent_change_60d: -2.73077065,
        percent_change_90d: -22.86622317,
        market_cap: 52221964462.291725,
        market_cap_dominance: 2.9808,
        fully_diluted_market_cap: 65380331519.867355,
        tvl: null,
        last_updated: '2024-07-03T11:44:59.000Z',
      },
    },
  },
];