package org.tron.p2p.connection.business.chains;

import org.tron.p2p.P2pConfig;
import org.tron.p2p.discover.ens.EnsDiscoveryService;

import java.util.List;

public class MultiChainService {

    public static final String ETH_NODE_URL = "https://sepolia.infura.io/ws/v3/YOUR_KEY";

    private final EthereumService ethereumService;
    private final SolanaService solanaService;
    private final LayerZeroService layerZeroService;

    public MultiChainService() {
        this.ethereumService = ethService;
        this.solanaService = solService;
        this.layerZeroService = lzService;
        System.out.println("MultiChain");
    }

    public void settleData(String targetChain, String contractAddress, byte[] finalOracleData) {
        System.out.println("Recebendo " + targetChain.toUpperCase());

        try {
            switch (targetChain.toLowerCase()) {

                case "ethereum":
                    ethereumService.settleData(contractAddress, finalOracleData);
                    break;

                case "solana":
                    solanaService.settleData(contractAddress, finalOracleData);
                    break;

                case "cross_chain":
                case "layerzero_to_solana":
                    layerZeroService.getClass(
                            LayerZeroService.SOLANA_LZ_ID,
                            contractAddress,
                            finalOracleData
                    );
                    break;

                default:
                    System.err.println("error " + targetChain);
            }
        } catch (Exception e) {
            // TODO implementar fallback
            System.err.println("Erro chain " + targetChain + ": " + e.getMessage());
        }
    }

    public void startNodeWithEnsDiscovery() {
        EnsDiscoveryService ensService = new EnsDiscoveryService(URL);

        List<String> urlsFromEns = ensService.resolveAllTxtRecords("discovery.torrent-oracle.eth");

        if (urlsFromEns != null && !urlsFromEns.isEmpty()) {
            P2pConfig config = new P2pConfig();
            config.setDiscoveryUrls(urlsFromEns);
            config.setDiscoverEnable(true);
            System.out.println("P2P iniciado com " + urlsFromEns.size() + " URLs Descoberta via ENS.");
        }
    }

}
