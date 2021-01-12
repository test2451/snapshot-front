import Vue from 'vue';
import { getInstance } from '@snapshot-labs/lock/plugins/vue';
import { ipfsGet, getScores } from '@snapshot-labs/snapshot.js/src/utils';
import getProvider from '@snapshot-labs/snapshot.js/src/utils/provider';
import client from '@/helpers/client';
import { formatProposal, formatProposals, formatSpace } from '@/helpers/utils';
import { getBlockNumber, signMessage } from '@/helpers/web3';
import { version } from '@/../package.json';

const ipfsNode = process.env.VUE_APP_IPFS_NODE || 'ipfs.io';

const state = {
  init: false,
  loading: false,
  modalOpen: false,
  spaces: {}
};

const mutations = {
  SET(_state, payload) {
    Object.keys(payload).forEach(key => {
      Vue.set(_state, key, payload[key]);
    });
  },
  SEND_REQUEST() {
    console.debug('SEND_REQUEST');
  },
  SEND_SUCCESS() {
    console.debug('SEND_SUCCESS');
  },
  SEND_FAILURE(_state, payload) {
    console.debug('SEND_FAILURE', payload);
  },
  GET_PROPOSALS_REQUEST() {
    console.debug('GET_PROPOSALS_REQUEST');
  },
  GET_PROPOSALS_SUCCESS() {
    console.debug('GET_PROPOSALS_SUCCESS');
  },
  GET_PROPOSALS_FAILURE(_state, payload) {
    console.debug('GET_PROPOSALS_FAILURE', payload);
  },
  GET_PROPOSAL_REQUEST() {
    console.debug('GET_PROPOSAL_REQUEST');
  },
  GET_PROPOSAL_SUCCESS() {
    console.debug('GET_PROPOSAL_SUCCESS');
  },
  GET_PROPOSAL_FAILURE(_state, payload) {
    console.debug('GET_PROPOSAL_FAILURE', payload);
  },
  GET_POWER_REQUEST() {
    console.debug('GET_POWER_REQUEST');
  },
  GET_POWER_SUCCESS() {
    console.debug('GET_POWER_SUCCESS');
  },
  GET_POWER_FAILURE(_state, payload) {
    console.debug('GET_POWER_FAILURE', payload);
  }
};

const actions = {
  init: async ({ commit, dispatch }) => {
    commit('SET', { loading: true });
    const connector = await Vue.prototype.$auth.getConnector();
    if (connector) await dispatch('login', connector);
    await dispatch('getSpaces');
    commit('SET', { loading: false, init: true });
  },
  loading: ({ commit }, payload) => {
    commit('SET', { loading: payload });
  },
  toggleModal: ({ commit }) => {
    commit('SET', { modalOpen: !state.modalOpen });
  },
  getSpaces: async ({ commit }) => {
    // let spaces: any = await client.request('spaces');
    // TODO:
    let spaces: any = {"pancake":
    {
        "name": "PancakeSwap",
        "network": "56",
        "symbol": "CAKEVOTE",
        "skin": "pancake",
        "domain": "voting.pancakeswap.finance",
        "strategies": [
        {
            "name": "pancake",
            "params":
            {
                "address": "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
                "chefAddresses": [
                {
                  "address": "0x0554a5D083Abf2f056ae3F6029e1714B9A655174",
                  "decimals": 18
                },
                {
                  "address": "0x1500fa1afbfe4f4277ed0345cdf12b2c9ca7e139",
                  "decimals": 18
                },
                {
                  "address": "0x624ef5C2C6080Af188AF96ee5B3160Bb28bb3E02",
                  "decimals": 18
                },
                {
                  "address": "0x108BFE84Ca8BCe0741998cb0F60d313823cEC143",
                  "decimals": 18
                },
                {
                  "address": "0x4A26b082B432B060B1b00A84eE4E823F04a6f69a",
                  "decimals": 18
                },
                {
                  "address": "0x3cc08B7C6A31739CfEd9d8d38b484FDb245C79c8",
                  "decimals": 18
                },
                {
                  "address": "0xd18E1AEb349ef0a6727eCe54597D98D263e05CAB",
                  "decimals": 18
                },
                {
                  "address": "0xbE65d7e42E05aD2c4ad28769dc9c5b4b6EAff2C7",
                  "decimals": 18
                },
                {
                  "address": "0x543467B17cA5De50c8BF7285107A36785Ab57E56",
                  "decimals": 18
                },
                {
                  "address": "0x65aFEAFaec49F23159e897EFBDCe19D94A86A1B6",
                  "decimals": 18
                }]
            }
        }],
        "members": ["0x6eaf1b33b8672c5dc40aB8f4bA3A0111723126c7"],
        "filters":
        {
            "defaultTab": "core",
            "minScore": 0,
            "invalids": [
              "QmXAEfVnKwJordj7WQUeB3pdJ147jyRq99iGagKntijNsw",
              "QmfSUjMKSLgFzT8aQQcTfUK3HhUFY3E1K3mrAtt99waFJQ",
              "QmWCLxq1Ya4opwkSLU4v1zecsEH8C26pdG64VwW5WyXtqb",
              "QmTBdcBuYZi2wUrMuTmQgz4dmG13wGc8A6hXiszt9T7Lup",
              "QmZ3iPtLRKzq6Wk1MSsmUg6uKuqFGjdGVX1TTjdvHSZwUz",
              "Qmeg1BDH838deKqN2baoNE6rePkkXqLy3cujLyNTdmCLsF",
              "QmeiB2PtRBtk9XDk9LAWuCPH2Thp67tKqHPmGdc1oNiDm6",
              "QmcoGEX52GaGM2sJC2EKZgNuxRxjfeiotn1kVnApcgBJnq",
              "QmZ567dsaYWYoJEPvJHefWqpiTdFJQHYt4aW4eVxceoKVe",
              "QmQJNEM62hNLFyLweY7r58Vc2E563DfMQMYif595zp1dsr",
              "QmW5VcH3PiMQ9jn3hLb8QaJi6zAWm5meBcnRF7KtBZ6RaK",
              "QmTM95ep6PTgRQWD7H5nHcRqPP63zhrvkrGVFGaq7MRzyP",
              "QmdW7JBkD6T8rSQ3KhNrW7gZ1TS31J32FrKW3GEnktwWLq",
              "QmNRLyxrGeKFQ4uy3YbA9B4SKQicYHVqwFm4QfeK8qBL5h"
            ]
        }
    }}
    spaces = Object.fromEntries(
      Object.entries(spaces).map(space => [
        space[0],
        formatSpace(space[0], space[1])
      ])
    );
    commit('SET', { spaces });
    return spaces;
  },
  send: async ({ commit, dispatch, rootState }, { space, type, payload }) => {
    const auth = getInstance();
    commit('SEND_REQUEST');
    try {
      const msg: any = {
        address: rootState.web3.account,
        msg: JSON.stringify({
          version,
          timestamp: (Date.now() / 1e3).toFixed(),
          space,
          type,
          payload
        })
      };
      msg.sig = await signMessage(auth.web3, msg.msg, rootState.web3.account);
      const result = await client.request('message', msg);
      commit('SEND_SUCCESS');
      dispatch('notify', ['green', `Your ${type} is in!`]);
      return result;
    } catch (e) {
      commit('SEND_FAILURE', e);
      const errorMessage =
        e && e.error_description
          ? `Oops, ${e.error_description}`
          : 'Oops, something went wrong!';
      dispatch('notify', ['red', errorMessage]);
      return;
    }
  },
  getProposals: async ({ commit }, space) => {
    commit('GET_PROPOSALS_REQUEST');
    console.log(space)
    try {
      let proposals: any = await client.request(`${space.key}/proposals`);
      if (proposals) {
        const scores: any = await getScores(
          space.key,
          space.strategies,
          space.network,
          getProvider(space.network),
          Object.values(proposals).map((proposal: any) => proposal.address)
        );
        console.log('Scores', scores);
        proposals = Object.fromEntries(
          Object.entries(proposals).map((proposal: any) => {
            proposal[1].score = scores.reduce(
              (a, b) => a + (b[proposal[1].address] || 0),
              0
            );
            return [proposal[0], proposal[1]];
          })
        );
      }
      commit('GET_PROPOSALS_SUCCESS');
      return formatProposals(proposals);
    } catch (e) {
      commit('GET_PROPOSALS_FAILURE', e);
    }
  },
  getProposal: async ({ commit }, { space, id }) => {
    commit('GET_PROPOSAL_REQUEST');
    try {
      const blockNumber = await getBlockNumber(getProvider(space.network));
      const result: any = {};
      const [proposal, votes] = await Promise.all([
        ipfsGet(ipfsNode, id),
        client.request(`${space.key}/proposal/${id}`)
      ]);
      result.proposal = formatProposal(proposal);
      result.proposal.ipfsHash = id;
      result.votes = votes;
      const { snapshot } = result.proposal.msg.payload;
      const blockTag = snapshot > blockNumber ? 'latest' : parseInt(snapshot);
      const scores: any = await getScores(
        space.key,
        space.strategies,
        space.network,
        getProvider(space.network),
        Object.keys(result.votes),
        // @ts-ignore
        blockTag
      );
      console.log('Scores', scores);
      result.votes = Object.fromEntries(
        Object.entries(result.votes)
          .map((vote: any) => {
            vote[1].scores = space.strategies.map(
              (strategy, i) => scores[i][vote[1].address] || 0
            );
            vote[1].balance = vote[1].scores.reduce((a, b: any) => a + b, 0);
            return vote;
          })
          .sort((a, b) => b[1].balance - a[1].balance)
          .filter(vote => vote[1].balance > 0)
      );
      result.results = {
        totalVotes: result.proposal.msg.payload.choices.map(
          (choice, i) =>
            Object.values(result.votes).filter(
              (vote: any) => vote.msg.payload.choice === i + 1
            ).length
        ),
        totalBalances: result.proposal.msg.payload.choices.map((choice, i) =>
          Object.values(result.votes)
            .filter((vote: any) => vote.msg.payload.choice === i + 1)
            .reduce((a, b: any) => a + b.balance, 0)
        ),
        totalScores: result.proposal.msg.payload.choices.map((choice, i) =>
          space.strategies.map((strategy, sI) =>
            Object.values(result.votes)
              .filter((vote: any) => vote.msg.payload.choice === i + 1)
              .reduce((a, b: any) => a + b.scores[sI], 0)
          )
        ),
        totalVotesBalances: Object.values(result.votes).reduce(
          (a, b: any) => a + b.balance,
          0
        )
      };
      commit('GET_PROPOSAL_SUCCESS');
      return result;
    } catch (e) {
      commit('GET_PROPOSAL_FAILURE', e);
    }
  },
  getPower: async ({ commit }, { space, address, snapshot }) => {
    commit('GET_POWER_REQUEST');
    console.log(space, address, snapshot)
    try {
      const blockNumber = await getBlockNumber(getProvider(space.network));
      const blockTag = snapshot > blockNumber ? 'latest' : parseInt(snapshot);
      let scores: any = await getScores(
        space.key,
        space.strategies,
        space.network,
        getProvider(space.network),
        [address],
        // @ts-ignore
        blockTag
      );
      scores = scores.map((score: any) =>
        Object.values(score).reduce((a, b: any) => a + b, 0)
      );
      commit('GET_POWER_SUCCESS');
      return {
        scores,
        totalScore: scores.reduce((a, b: any) => a + b, 0)
      };
    } catch (e) {
      commit('GET_POWER_FAILURE', e);
    }
  }
};

export default {
  state,
  mutations,
  actions
};
