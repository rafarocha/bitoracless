package org.tron.p2p.discover.ens;

import org.web3j.protocol.Web3j;
import org.web3j.protocol.http.HttpService;
import org.web3j.ens.EnsResolver;
import java.util.Arrays;
import java.util.List;
import java.util.Collections;
import java.util.stream.Collectors;

public class EnsDiscoveryService {

    private final EnsResolver ensResolver;

    private static final String ETHEREUM_NODE_URL = "https://mainnet.infura.io/v3/YOUR_INFURA_KEY";

    public EnsDiscoveryService(String url) {
        Web3j web3j = Web3j.build(new HttpService(ETHEREUM_NODE_URL));
        this.ensResolver = new EnsResolver(web3j);
    }

    public List<String> resolveAllTxtRecords(String ensName) {
        String rawTxtRecord = ensResolver.resolve(ensName);

        if (rawTxtRecord == null || rawTxtRecord.trim().isEmpty()) {
            System.err.println("ENS: Nenhum registro TXT (DNS Discovery URL) encontrado em " + ensName);
            return Collections.emptyList();
        }

        List<String> urls = Arrays.stream(rawTxtRecord.split(","))
                .map(String::trim)
                .filter(url -> url.startsWith("tree://")) // Filtra apenas URLs válidas do seu protocolo
                .collect(Collectors.toList());

        System.out.println("ENS: Resolvido " + ensName + " para " + urls.size() + " URLs de Descoberta.");
        return urls;

    }
}